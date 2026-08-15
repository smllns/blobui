import { childrenProp, classNameProp, disabledProp } from './commonProps';
import { prop } from './helpers';

export const buttonGroupProps = [
  prop(
    'orientation',
    "'horizontal' | 'vertical'",
    'horizontal',
    'Axis the members are laid out on. The corners follow, in both directions',
  ),

  prop(
    'gap',
    "'joined' | 'spaced'",
    'joined',
    'joined welds the members into one object. spaced keeps the grouping and drops the join, so every member stays a separate control',
  ),

  prop(
    'block',
    'boolean',
    'false',
    'Stretches the group to its container and gives every member an equal share of it',
  ),

  prop(
    'role',
    "'group' | 'toolbar'",
    'group',
    'group is n tab stops, for unrelated actions. toolbar is one tab stop with arrow keys and Home/End, for a row that is a single instrument',
  ),

  disabledProp,

  prop(
    'loading',
    'boolean',
    'false',
    'One action is running and none of the others may be started. Members that are not themselves loading recede',
  ),

  classNameProp,
  childrenProp,
];
