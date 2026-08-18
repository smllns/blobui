import { forwardRef, useId, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent, PointerEvent } from 'react';
import { cn } from '@/lib/cn';
import { fieldStackStyles } from '@/components/shared/field.styles';
import {
  helperErrorStyles,
  helperStyles,
  labelStyles,
  requiredStyles,
} from '@/components/shared/styles';
import {
  sliderOutputStyles,
  sliderRangeStyles,
  sliderRowStyles,
  sliderStyles,
  sliderThumbStyles,
  sliderTrackStyles,
} from './slider.styles';
import type { SliderProps, SliderValue } from './slider.types';

const clamp = (value: number, low: number, high: number) =>
  Math.min(Math.max(value, low), high);

const decimalsOf = (step: number) => (String(step).split('.')[1] ?? '').length;

function snap(raw: number, min: number, max: number, step: number) {
  const stepped = Math.round((raw - min) / step) * step + min;

  return Number(clamp(stepped, min, max).toFixed(decimalsOf(step)));
}

export const Slider = forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      onChangeEnd,
      min = 0,
      max = 100,
      step = 1,
      largeStep,
      size,
      disabled = false,
      readOnly = false,
      error,
      required,
      label,
      description,
      errorMessage,
      showValue = false,
      formatValue,
      thumbLabels = ['Minimum', 'Maximum'],
      forceState,
      id,
      style,
      className,
      'aria-label': ariaLabel,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const sliderId = id ?? generatedId;
    const labelId = label ? `${sliderId}-label` : undefined;
    const helperId =
      description || errorMessage ? `${sliderId}-helper` : undefined;

    const isError = error || !!errorMessage;
    const interactive = !disabled && !readOnly;
    const page = largeStep ?? step * 10;

    const [uncontrolled, setUncontrolled] = useState<SliderValue>(
      defaultValue ?? min,
    );

    const current = value ?? uncontrolled;
    const isRange = Array.isArray(current);
    const values = isRange ? current : [current];

    const trackRef = useRef<HTMLDivElement>(null);
    const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const latest = useRef<number[]>(values);
    const activeThumb = useRef<number | null>(null);
    const [dragging, setDragging] = useState(false);

    const toPercent = (thumbValue: number) =>
      max === min ? 0 : ((thumbValue - min) / (max - min)) * 100;

    const shape = (next: number[]): SliderValue =>
      isRange ? [next[0], next[1]] : next[0];

    const commit = (next: number[]) => {
      const shaped = shape(next);

      latest.current = next;

      if (value === undefined) setUncontrolled(shaped);

      onChange?.(shaped);

      return shaped;
    };

    const setThumb = (index: number, raw: number) => {
      const low = index === 1 ? values[0] : min;
      const high = index === 0 && isRange ? values[1] : max;
      const next = clamp(snap(raw, min, max, step), low, high);

      if (next === values[index]) return null;

      const draft = [...values];
      draft[index] = next;

      return commit(draft);
    };

    const isRtl = () => {
      const track = trackRef.current;

      return track ? getComputedStyle(track).direction === 'rtl' : false;
    };

    const valueFromPointer = (clientX: number) => {
      const track = trackRef.current;

      if (!track) return min;

      const rect = track.getBoundingClientRect();

      if (rect.width === 0) return min;

      const distance = isRtl() ? rect.right - clientX : clientX - rect.left;

      return min + clamp(distance / rect.width, 0, 1) * (max - min);
    };

    const closestThumb = (raw: number) => {
      if (!isRange) return 0;

      const [from, to] = values;

      if (from === to) return raw < from ? 0 : 1;

      return Math.abs(raw - from) <= Math.abs(raw - to) ? 0 : 1;
    };

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
      if (!interactive || event.button !== 0) return;

      const raw = valueFromPointer(event.clientX);
      const index = closestThumb(raw);

      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);

      latest.current = values;
      activeThumb.current = index;
      setDragging(true);

      thumbRefs.current[index]?.focus();
      setThumb(index, raw);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
      const index = activeThumb.current;

      if (index === null) return;

      setThumb(index, valueFromPointer(event.clientX));
    };

    const endDrag = () => {
      if (activeThumb.current === null) return;

      activeThumb.current = null;
      setDragging(false);

      onChangeEnd?.(shape(latest.current));
    };

    const handleKeyDown = (
      event: KeyboardEvent<HTMLButtonElement>,
      index: number,
    ) => {
      if (!interactive) return;

      const rtl = isRtl();
      const from = values[index];
      let next: number;

      switch (event.key) {
        case 'ArrowRight':
          next = from + (rtl ? -step : step);
          break;
        case 'ArrowLeft':
          next = from + (rtl ? step : -step);
          break;
        case 'ArrowUp':
          next = from + step;
          break;
        case 'ArrowDown':
          next = from - step;
          break;
        case 'PageUp':
          next = from + page;
          break;
        case 'PageDown':
          next = from - page;
          break;
        case 'Home':
          next = min;
          break;
        case 'End':
          next = max;
          break;
        default:
          return;
      }

      event.preventDefault();

      const committed = setThumb(index, next);

      if (committed !== null) onChangeEnd?.(committed);
    };

    const format = (thumbValue: number) =>
      formatValue ? formatValue(thumbValue) : String(thumbValue);

    const readout = isRange
      ? `${format(values[0])} – ${format(values[1])}`
      : format(values[0]);

    const rootStyle = {
      ...style,
      ...(isRange
        ? {
            '--slider-from': `${toPercent(values[0])}%`,
            '--slider-to': `${toPercent(values[1])}%`,
          }
        : { '--slider-value': `${toPercent(values[0])}%` }),
    } as CSSProperties;

    return (
      <div className={cn(fieldStackStyles, 'w-full')}>
        {label && (
          <span id={labelId} className={labelStyles}>
            {label}
            {required && (
              <span aria-hidden='true' className={requiredStyles}>
                *
              </span>
            )}
          </span>
        )}

        <div className={sliderRowStyles}>
          <div
            ref={ref}
            id={sliderId}
            data-size={size ?? 'md'}
            data-dragging={dragging || undefined}
            data-disabled={disabled || undefined}
            data-readonly={readOnly || undefined}
            data-invalid={isError || undefined}
            data-interactive={interactive ? '' : undefined}
            style={rootStyle}
            className={cn(
              sliderStyles({ size, invalid: isError, disabled, readOnly }),
              className,
            )}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onLostPointerCapture={endDrag}
            {...props}
          >
            <div ref={trackRef} className={sliderTrackStyles}>
              <span className={sliderRangeStyles} />

              {values.map((thumbValue, index) => {
                const thumbNameId = isRange
                  ? `${sliderId}-thumb-${index}`
                  : undefined;

                const nameIds = [labelId, thumbNameId]
                  .filter(Boolean)
                  .join(' ');

                return (
                  <button
                    key={index}
                    ref={(node) => {
                      thumbRefs.current[index] = node;
                    }}
                    type='button'
                    role='slider'
                    aria-orientation='horizontal'
                    aria-valuemin={index === 1 ? values[0] : min}
                    aria-valuemax={index === 0 && isRange ? values[1] : max}
                    aria-valuenow={thumbValue}
                    aria-valuetext={formatValue?.(thumbValue)}
                    aria-labelledby={nameIds || undefined}
                    aria-label={nameIds ? undefined : ariaLabel}
                    aria-describedby={helperId}
                    aria-invalid={isError || undefined}
                    aria-readonly={readOnly || undefined}
                    disabled={disabled}
                    data-force={forceState}
                    style={
                      {
                        '--slider-at': `${toPercent(thumbValue)}%`,
                      } as CSSProperties
                    }
                    className={cn(
                      sliderThumbStyles({
                        invalid: isError,
                        disabled,
                        readOnly,
                      }),
                    )}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  >
                    {thumbNameId && (
                      <span id={thumbNameId} className='sr-only'>
                        {thumbLabels[index]}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {showValue && (
            <output htmlFor={sliderId} className={sliderOutputStyles}>
              {readout}
            </output>
          )}
        </div>

        {(description || errorMessage) && (
          <p
            id={helperId}
            className={errorMessage ? helperErrorStyles : helperStyles}
          >
            {errorMessage ?? description}
          </p>
        )}
      </div>
    );
  },
);
