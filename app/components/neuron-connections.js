import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showMore(){
      this.set('itemsToShow', this.get('itemsToShow') + 5);
    }
  },
  itemsToShow: 5,
  visibleItems: Ember.computed('model.connections', 'itemsToShow', function () {
    return this.get('model.connections').slice(0, this.get('itemsToShow'));
  }),
  hasMore: Ember.computed('model.connections', 'itemsToShow', function () {
    return this.get('model.connections').length > this.get('itemsToShow');
  })
});
