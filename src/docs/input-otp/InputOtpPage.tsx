import { DocsPage } from '../components/DocsPage';
import { InputOtpPlayground } from './InputOtpPlayground';
import { InputOtp } from '@/components/input-otp/InputOtp';
import { componentProps } from '@/lib/props';
import { getInstallation } from '../utils/getInstallation';
import { INPUT_OTP_STATES } from './inputOtpStates';

export function InputOtpDocs() {
  return (
    <DocsPage
      header='Input OTP'
      description='One real input, n painted windows onto it — so paste, autofill and the numeric keypad keep working.'
      preview={
        <div className='flex flex-col gap-8 '>
          <InputOtp defaultValue='4920' />
          <InputOtp charset='alnum' groupSize={0} defaultValue='A7KQ2M' />
        </div>
      }
      states={INPUT_OTP_STATES}
      playground={<InputOtpPlayground />}
      installation={getInstallation('inputOtp')}
      props={componentProps.inputOtp}
    />
  );
}
