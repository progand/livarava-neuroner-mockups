import Ember from 'ember';
import NeuronDeterminator from '../mixins/neuron-type-determinator';

export default Ember.Component.extend(NeuronDeterminator, {
  init(){
    this._super.apply(this, arguments);
    this.set('showingConnections', !this.get('hasSpecificInfo'));
  },
  actions: {
    showInfo(){
      this.set('showingConnections', false);
    },
    showConnections(){
      this.set('showingConnections', true);
    }
  }
});
