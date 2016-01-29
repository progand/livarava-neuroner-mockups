import Ember from 'ember';

export default Ember.Component.extend({
  options: {
  },
  actions: {
    showMore(){
      this.set('itemsToShow', this.get('itemsToShow') + 5);
    }
  },
  itemsToShow: 5,
  visibleItems: Ember.computed('model.feed', 'itemsToShow', function () {
    return this.get('model.feed').slice(0, this.get('itemsToShow'));
  }),
  hasMore: Ember.computed('model.feed', 'itemsToShow', function () {
    return this.get('model.feed').length > this.get('itemsToShow');
  })
});
