import Ember from 'ember';

export default Ember.Component.extend({
  options: {
    showingText: false
  },
  actions: {
    showMore(){
      this.set('itemsToShow', this.get('itemsToShow') + 5);
    }
  },
  init(){
    this._super.apply(this, arguments);
    this.eventsBus.on('neuron:rss:options', this, 'onOptionsChange');
  },
  didDestroyElement(){
    this.eventsBus.off('neuron:rss:options', this, 'onOptionsChange');
  },
  onOptionsChange(options){
    this.set('options', options);
  },
  itemsToShow: 5,
  visibleItems: Ember.computed('model.feed', 'itemsToShow', function () {
    return this.get('model.feed').slice(0, this.get('itemsToShow'));
  }),
  hasMore: Ember.computed('model.feed', 'itemsToShow', function () {
    return this.get('model.feed').length > this.get('itemsToShow');
  })
});
