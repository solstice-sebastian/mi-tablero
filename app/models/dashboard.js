import DS from 'ember-data';

export default DS.Model.extend({
  dashboardAssets: DS.hasMany('dashboard-asset'),
});
