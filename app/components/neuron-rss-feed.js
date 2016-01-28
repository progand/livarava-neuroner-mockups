import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showMore(){
      this.set('feedsToShow', this.get('feedsToShow') + 5);
    }
  },
  feedsToShow: 5,
  rssFeedVisible: Ember.computed('model.feed', 'feedsToShow', function () {
    return this.get('model.feed').slice(0, this.get('feedsToShow'));
  }),
  hasMore: Ember.computed('model.feed', 'feedsToShow', function () {
    return this.get('model.feed').length > this.get('feedsToShow');
  })
});
