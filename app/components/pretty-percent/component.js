import Component from '@ember/component';
import { get, computed } from '@ember/object';
import calcPrettyPercent from '../../utils/calc-pretty-percent';

export default Component.extend({
  tagName: 'span',
  classNames: ['pretty-percent'],
  classNameBindings: ['stateClass'],

  value: null,
  isColored: false,

  stateClass: computed('value', function() {
    const value = +get(this, 'value');
    if (value > 0) {
      return 'positive';
    } else if (value < 0) {
      return 'negative';
    }
    return 'neutral';
  }),

  output: computed('value', function() {
    const value = get(this, 'value');
    return calcPrettyPercent(value);
  }),
});
