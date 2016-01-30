import Ember from 'ember';

export default Ember.Component.extend({
  options: {
    showingText: false
  },
  watchShowingText: Ember.observer('options.showingText', function () {
    this.eventsBus.trigger('neuron:rss:options', this.get('options'));
  })
});
