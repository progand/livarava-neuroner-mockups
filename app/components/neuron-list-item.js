import Ember from 'ember';
import NeuronDeterminator from '../mixins/neuron-type-determinator';

export default Ember.Component.extend(NeuronDeterminator, {
  hasId: Ember.computed('neuron.id', function () {
    return !isNaN(this.get('neuron.id'));
  }),
  route: Ember.computed('neuron.abstract', function () {
    return this.get('neuron.abstract') ? 'neuron' : 'search';
  })
});
