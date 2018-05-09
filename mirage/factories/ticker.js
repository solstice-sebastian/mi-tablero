import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  afterCreate(ticker) {
    let newPrice;
    if (Math.random() > 0.5) {
      newPrice = ticker.price * 1.001;
    } else {
      newPrice = ticker.price * 0.099;
    }

    ticker.update({ price: newPrice });
  },
});
