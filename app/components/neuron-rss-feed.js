import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showMore(){
      this.set('feedsToShow', this.get('feedsToShow') + 4);
    }
  },
  isRSS: Ember.computed('model.url', function () {
    return /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(this.get('model.url'));
  }),
  feedsToShow: 3,
  rssFeed: Ember.computed('model.url', function () {
    var rssFeed = [],
      firstWord,
      secondWord,
      thirdWord;

    if (_.isEmpty(this.get('model.url'))) {
      return rssFeed;
    }
    [firstWord='news', secondWord='interesting', thirdWord='fascinating'] = _.chain(this.get('model.url')).words().without('feed', 'http', 'https', 'com', 'org').value();

    _.times(11, index => {
      rssFeed.push({
        imageIndex: _.random(0, 2),
        title: `About ${firstWord} and ${secondWord} #${index}`,
        date: new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now())),
        text: `Lorem ipsum dolor sit amet <span class="text-success">${firstWord}</span>, consectetur adipiscing elit, sed do eiusmod tempor <span class="text-success">${secondWord}</span> incididunt ut labore et dolore magna aliqua <span class="text-success">${thirdWord}</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco <span class="text-success">${secondWord}</span> laboris nisi ut aliquip ex ea commodo consequat...`

      });
    });

    return rssFeed;
  }),
  rssFeedVisible: Ember.computed('rssFeed', 'feedsToShow', function () {
    return this.get('rssFeed').slice(0, this.get('feedsToShow'));
  }),
  hasMore: Ember.computed('rssFeed', 'feedsToShow', function () {
    return this.get('rssFeed').length > this.get('feedsToShow');
  })
});
