import { helper } from '@ember/component/helper';

export function prettyPercent([number] /* , hash */) {
  return `${(+number * 100).toFixed(2)}%`;
}

export default helper(prettyPercent);
