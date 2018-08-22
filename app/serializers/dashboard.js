/* eslint-disable no-param-reassign, no-shadow */

import DS from 'ember-data';
import { isEmpty } from '@ember/utils';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalize(modelClass, resourceHash, prop) {
    const assetsHash = resourceHash['dashboard-assets'];
    resourceHash.totalValue = resourceHash['total-value'];
    if (isEmpty(assetsHash) === false) {
      const { asset } = assetsHash[0];
      const base = assetsHash[0].lastBuyIn.symbol.replace(asset, '');
      resourceHash.currencySymbol = base === 'USD' ? '$' : base;
    }
    assetsHash.forEach((dashboardAsset) => {
      let openOrders = [];
      if (dashboardAsset.openOrders.length > 0) {
        openOrders = dashboardAsset.openOrders.map((order) =>
          this.store.createRecord('order', Object.assign({}, order, { id: null }))
        );
      }

      const balance = this.store.createRecord('balance');
      if (dashboardAsset.balance) {
        const { asset, free, qty, locked } = dashboardAsset.balance;
        balance.setProperties({ asset, free, qty, locked, id: asset });
      }

      const record = this.store.createRecord(
        'dashboard-asset',
        Object.assign({}, dashboardAsset, {
          id: dashboardAsset.asset,
          openOrders,
          balance,
          lastBuyIn: this.store.createRecord(
            'order',
            Object.assign({}, dashboardAsset.lastBuyIn, { id: null })
          ),
        })
      );
      if (resourceHash.dashboardAssets === undefined) {
        resourceHash.dashboardAssets = [];
      }
      resourceHash.dashboardAssets.push(record);
    });
    return this._super(modelClass, resourceHash, prop);
  },
});
