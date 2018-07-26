import { computed, get } from '@ember/object';
import { inject } from '@ember/service';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  envVars: inject(),
  host: computed(function() {
    return get(this, 'envVars.API_HOST');
  }),

  headers: computed(function() {
    const username = get(this, 'envVars.RECORD_MANAGER_USER');
    const password = get(this, 'envVars.RECORD_MANAGER_PWD');
    return {
      authorization: JSON.stringify({ username, password }),
      'Content-Type': 'application/json',
      rando: 'header val',
      Accept: 'application/json',
    };
  }),
});
