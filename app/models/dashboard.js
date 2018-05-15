import DS from 'ember-data';
import { empty } from '@ember/object/computed';

export default DS.Model.extend({
  dashboardAssets: DS.hasMany('dashboard-asset'),
  isEmpty: empty('dashboardAssets'),
});
