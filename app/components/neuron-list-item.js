import Ember from 'ember';
import NeuronDeterminator from '../mixins/neuron-type-determinator';

export default Ember.Component.extend(NeuronDeterminator, {
  route: Ember.computed('neuron.abstract', function () {
    return this.get('neuron.abstract') ? 'neuron' : 'search';
  }),
  image: Ember.computed('neuron.image', 'neuron.image_url', 'neuron.main_image_url', function () {
    return this.get('neuron.image') || this.get('neuron.image_url') || this.get('neuron.main_image_url');
  }),
});
