import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      name: 'Example RSS Neuron',
      description: 'This is description of the neuron. You can edit it as well as URL above.',
      url: 'http://blog.aweber.com/feed',
      stats: {
        users: _.random(10, 90),
        axons: _.random(10, 150),
        views: _.random(100, 500)
      },
      feed: Ember.computed('model.url', function () {
        var rssFeed = [],
          firstWord,
          secondWord,
          thirdWord;

        [firstWord = 'news', secondWord = 'interesting', thirdWord = 'fascinating'] = _.chain(this.url).words().without('feed', 'http', 'https', 'com', 'org').value();

        _.times(15, index => {
          rssFeed.push({
            imageIndex: _.random(0, 2),
            title: `About ${firstWord} and ${secondWord} #${index}`,
            date: new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now())),
            text: `Lorem ipsum dolor sit amet <span class="text-success">${firstWord}</span>, consectetur adipiscing elit, sed do eiusmod tempor <span class="text-success">${secondWord}</span> incididunt ut labore et dolore magna aliqua <span class="text-success">${thirdWord}</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco <span class="text-success">${secondWord}</span> laboris nisi ut aliquip ex ea commodo consequat...`

          });
        });

        return rssFeed;
      })
    };
  }
});
