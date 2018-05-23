import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  normalize(modelClass, resourceHash, prop) {
    const assetsHash = resourceHash['dashboard-assets'];
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

      this.store.createRecord(
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
    });
    return this._super(modelClass, resourceHash, prop);
  },
});
