import Ember from 'ember';

export default Ember.Component.extend({
  showingConnections: false,
  specificInfoOptions: {
    showingText: false
  },
  actions: {
    showInfo(){
      this.set('showingConnections', false);
    },
    showConnections(){
      this.set('showingConnections', true);
    }
  },
  watchFoo: Ember.observer('specificInfoOptions.showingText', function () {
    this.eventsBus.trigger('neuron:rss:options', this.get('specificInfoOptions'));
  })
});
