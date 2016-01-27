import Ember from 'ember';

export default Ember.Component.extend({
  isRSS: Ember.computed('model.url', function() {
    return /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(this.get('model.url'));
  }),
  rssFeed: Ember.computed('model.url', function() {
    var rssFeed = [],
      firstWord,
      secondWord,
      thirdWord;

    if(_.isEmpty(this.get('model.url'))){
      return rssFeed;
    }
    [firstWord, secondWord, thirdWord] = _.chain(this.get('model.url')).words().without('feed', 'http', 'https', 'com', 'org').value();

    _.times(10, index => {
      rssFeed.push({
        image: `/img/feed/${_.random(0, 2)}.png`,
        title: `About ${firstWord} and ${secondWord} #${index}`,
        date: new Date(_.random(Date.now() - 24*60*60*1000, Date.now())),
        text: `Lorem ipsum dolor sit amet <span class="text-success">${firstWord}</span>, consectetur adipiscing elit, sed do eiusmod tempor <span class="text-success">${secondWord}</span> incididunt ut labore et dolore magna aliqua <span class="text-success">${firstWord}</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco <span class="text-success">${secondWord}</span> laboris nisi ut aliquip ex ea commodo consequat...`

      })
    });

    return rssFeed;
  })
});
