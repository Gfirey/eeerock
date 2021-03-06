import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';
let Band = EmberObject.extend({
  name: '',
});
export default Route.extend({
  model() {
    let ledZeppelin = Band.create({ name: 'Led Zeppelin' });
    let pearlJam = Band.create({ name: 'Pearl Jam' });
    let monetochka = Band.create({ name: 'Монеточка' });
    return A([ledZeppelin, pearlJam, monetochka]);
  }
});
