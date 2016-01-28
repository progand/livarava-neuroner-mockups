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
      feed: Ember.computed('url', function () {
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
      }),
      connections: [{
        "id": 32183,
        "header": "Are You Ready to Seek Funding? This 10-Point Checklist Will Decide.",
        "image": "https://www.livarava.com/static/livarava/img/neurons/link.png",
        "type": "link",
        "type_title": "link",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 30121,
        "header": "Las Vegas",
        "image": "http://i.imgur.com/nVnzXva.jpg",
        "type": "image",
        "type_title": "image",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 29521,
        "header": "LivaRava Webinar: Finance and Stocks - Lesson 2",
        "image": "https://www.livarava.com/static/livarava/img/neurons/event.png",
        "type": "event",
        "type_title": "event",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 27822,
        "header": "Startup fundraising",
        "image": "https://www.livarava.com/static/livarava/img/neurons/link.png",
        "type": "link",
        "type_title": "link",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 27462,
        "header": "Fundraising",
        "image": "https://www.livarava.com/static/livarava/img/neurons/text.png",
        "type": "text",
        "type_title": "text",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 27083,
        "header": "LivaRava Test",
        "image": "https://www.livarava.com/static/livarava/img/neurons/text.png",
        "type": "text",
        "type_title": "text",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 26051,
        "header": "LivaRava Webinar: Finance and Stocks - Part 1",
        "image": "https://www.livarava.com/static/livarava/img/neurons/event.png",
        "type": "event",
        "type_title": "event",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 23710,
        "header": "Downtown Las Vegas",
        "image": "https://www.livarava.com/static/livarava/img/neurons/text.png",
        "type": "text",
        "type_title": "text",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 22518,
        "header": "Funding",
        "image": "https://www.livarava.com/static/livarava/img/neurons/text.png",
        "type": "text",
        "type_title": "text",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 13239,
        "header": "This is Text Neuron - LivaRava",
        "image": "http://img0.svcdn.lasvegas.com/v2/cache/lasvegas/25C7DBB7FDEE98EB339313F2B55B68D5.jpg",
        "type": "image",
        "type_title": "image",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 13235,
        "header": "This is Text Neuron - LivaRava",
        "image": "http://flippins.com/wp-content/uploads/2014/02/las-vegas-night.jpg",
        "type": "image",
        "type_title": "image",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 12181,
        "header": "Las Vegas",
        "image": "https://www.livarava.com/static/livarava/img/neurons/text.png",
        "type": "text",
        "type_title": "text",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 8828,
        "header": "LivaRava Tutorial",
        "image": "https://www.livarava.com/static/livarava/img/neurons/text.png",
        "type": "text",
        "type_title": "text",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }, {
        "id": 0,
        "header": "LivaRava",
        "image": "https://www.livarava.com/static/livarava/img/projects/livarava-logo-black-400x400.png",
        "type": "project",
        "type_title": "project",
        "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
      }]
    };
  }
});
