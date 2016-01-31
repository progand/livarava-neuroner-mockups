import Ember from 'ember';
import NeuronDeterminator from '../mixins/neuron-type-determinator';

export default Ember.Component.extend(NeuronDeterminator, {
  showingDescription: true,
  actions: {
    showDescription(flag){
      this.set('showingDescription', flag);
    }
  }
});
