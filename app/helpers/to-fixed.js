import { helper } from '@ember/component/helper';

export function toFixed([str, place]) {
  return Number.parseInt(str, 10).toFixed(place);
}

export default helper(toFixed);
