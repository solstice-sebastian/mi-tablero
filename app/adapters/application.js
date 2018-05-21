import { computed, get } from '@ember/object';
import { inject } from '@ember/service';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  envVars: inject(),
  host: computed(function() {
    return get(this, 'envVars.API_HOST');
  }),
});
