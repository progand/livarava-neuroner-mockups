import Ember from 'ember';
import NeuronDeterminator from '../mixins/neuron-type-determinator';

export default Ember.Component.extend(NeuronDeterminator, {
  showing: null,

  init(){
    this._super.apply(this, arguments);
    this.set('showing', this.get('hasSpecificInfo') ? 'info' : 'connections');
  },

  actions: {
    show(whatToShow = 'info'){
      this.set('showing', whatToShow);
    }
  },

  showingInfo: Ember.computed('showing', function () {
    return this.get('showing') === 'info';
  }),
  showingComments: Ember.computed('showing', function () {
    return this.get('showing') === 'comments';
  }),
  showingConnections: Ember.computed('showing', function () {
    return this.get('showing') === 'connections';
  }),
});
