import Ember from 'ember';
import ShowMoreListMixin from '../mixins/show-more-list';

export default Ember.Component.extend(ShowMoreListMixin, {
  actions: {
    onNeuronIt(item){
      this.set('model.feed', _(this.get('model.feed'))
        .without(item)
        .value());
    }
  },

  items: Ember.computed('model.feed', function () {
    return this.get('model.feed');
  }),

  init(){
    this._super.apply(this, arguments);
    this.eventsBus.on('neuron:rss:options', this, 'onOptionsChange');
  },
  didDestroyElement(){
    this.eventsBus.off('neuron:rss:options', this, 'onOptionsChange');
  },

  onOptionsChange(options){
    this.set('options', options);
  }
});
