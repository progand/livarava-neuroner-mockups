import Ember from 'ember';

let neurons = [
  {
    title: 'RSS Feed',
    description: 'This is description of the neuron. You can edit it as well as the title above.',
    url: 'http://blog.aweber.com/feed',
    image: "https://www.livarava.com/static/livarava/img/neurons/rss.png",
    type: 'rss',
    type_title: 'RSS',
    feed: [{
      "url": "http://news.meta.ua/go.php?to=2015-11-45908111",
      "title": "Нарешті матиму свій сайт",
      "text": "Кілька варіантів дизайну сайту, а також для моїх журналістських та письменницьких потреб запропонували кілька ґатунків юзабіліті, себто. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-04-42531490",
      "title": "Найбільш високооплачувані вакансії в Україні та за кордоном",
      "text": "Для успішного кандидата потрібні: знання принципів юзабіліті і побудова web-систем та навички аналізу ринку і конкурентного середовища, розробки. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-09-44853592",
      "title": "18-20 вересня столичний Арт-завод «Платформа» прийме стартап",
      "text": "третій день конференції охопить веб- та мобільну розробку, проектування інтерфейсів, питання юзабіліті тощо. Крім того, усі три дні буде відкрито. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-07-43747615",
      "title": "KyivPost: два роки за пейволом",
      "text": "З точки зору юзабіліті все має бути зроблено «у два кліки». Обов'язково подивіться на всі існуючі системи платежів - на Заході, в суміжних сферах. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-11-45872119",
      "title": "Сьогодні, 14 листопада, — Всесвітній день юзабіліті",
      "text": "Всесвітній день юзабіліті (World Usability Day) був заснований у 2005. У цьому ж році його вперше відсвяткували. І з тих пір його відзначають щороку. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-11-45908111",
      "title": "Нарешті матиму свій сайт",
      "date": "2016-01-30T18:44:00.000Z",
      "text": "Кілька варіантів дизайну сайту, а також для моїх журналістських та письменницьких потреб запропонували кілька ґатунків юзабіліті, себто. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-04-42531490",
      "title": "Найбільш високооплачувані вакансії в Україні та за кордоном",
      "text": "Для успішного кандидата потрібні: знання принципів юзабіліті і побудова web-систем та навички аналізу ринку і конкурентного середовища, розробки. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-09-44853592",
      "title": "18-20 вересня столичний Арт-завод «Платформа» прийме стартап",
      "text": "третій день конференції охопить веб- та мобільну розробку, проектування інтерфейсів, питання юзабіліті тощо. Крім того, усі три дні буде відкрито. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-07-43747615",
      "title": "KyivPost: два роки за пейволом",
      "text": "З точки зору юзабіліті все має бути зроблено «у два кліки». Обов'язково подивіться на всі існуючі системи платежів - на Заході, в суміжних сферах. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-11-45872119",
      "title": "Сьогодні, 14 листопада, — Всесвітній день юзабіліті",
      "text": "Всесвітній день юзабіліті (World Usability Day) був заснований у 2005. У цьому ж році його вперше відсвяткували. І з тих пір його відзначають щороку. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-11-45908111",
      "title": "Нарешті матиму свій сайт",
      "text": "Кілька варіантів дизайну сайту, а також для моїх журналістських та письменницьких потреб запропонували кілька ґатунків юзабіліті, себто. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-04-42531490",
      "title": "Найбільш високооплачувані вакансії в Україні та за кордоном",
      "text": "Для успішного кандидата потрібні: знання принципів юзабіліті і побудова web-систем та навички аналізу ринку і конкурентного середовища, розробки. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-09-44853592",
      "title": "18-20 вересня столичний Арт-завод «Платформа» прийме стартап",
      "text": "третій день конференції охопить веб- та мобільну розробку, проектування інтерфейсів, питання юзабіліті тощо. Крім того, усі три дні буде відкрито. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-07-43747615",
      "title": "KyivPost: два роки за пейволом",
      "text": "З точки зору юзабіліті все має бути зроблено «у два кліки». Обов'язково подивіться на всі існуючі системи платежів - на Заході, в суміжних сферах. "

    }, {
      "url": "http://news.meta.ua/go.php?to=2015-11-45872119",
      "title": "Сьогодні, 14 листопада, — Всесвітній день юзабіліті",
      "text": "Всесвітній день юзабіліті (World Usability Day) був заснований у 2005. У цьому ж році його вперше відсвяткували. І з тих пір його відзначають щороку. "

    }]
  },
  {
    title: 'RSS Interfax',
    description: 'RSS feed of Ukrainian Interfax.',
    url: 'http://interfax.com.ua/news/last.rss',
    image: "https://www.livarava.com/static/livarava/img/neurons/rss.png",
    type: 'rss',
    type_title: 'RSS',
    loadRSS: true
  },
  {
    "title": "Are You Ready to Seek Funding? This 10-Point Checklist Will Decide.",
    "image": "https://www.livarava.com/static/livarava/img/neurons/link.png",
    "url": "http://www.entrepreneur.com/article/248777",
    "type": "link",
    "type_title": "link",
    "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
  }, {
    "title": "Las Vegas",
    "image": "http://i.imgur.com/nVnzXva.jpg",
    "url": "http://i.imgur.com/nVnzXva.jpg",
    "type": "image",
    "type_title": "image",
    "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
  }, {
    "title": "LivaRava Webinar: Finance and Stocks - Lesson 2",
    "image": "https://www.livarava.com/static/livarava/img/neurons/event.png",
    "type": "event",
    "type_title": "event",
    "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
  }, {
    "title": "Fundraising",
    "image": "https://www.livarava.com/static/livarava/img/neurons/text.png",
    "type": "text",
    "type_title": "text",
    "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
  }, {
    "title": "LivaRava",
    "image": "https://www.livarava.com/static/livarava/img/logo_460x159_black.png",
    "type": "project",
    "type_title": "project",
    "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
  }, {
    "title": "+38 (095) 55-55-55",
    "image": "https://www.livarava.com/static/livarava/img/neurons/phone.png",
    "type": "phone",
    "type_title": "phone",
    "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
  }, {
    "title": "info@livarava.com",
    "image": "https://www.livarava.com/static/livarava/img/neurons/email.png",
    "type": "email",
    "type_title": "email",
    "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
  }, {
    "title": "Youtube video",
    "url": "https://www.youtube.com/embed/il1xuIvvlBY",
    "image": "http://img.youtube.com/vi/il1xuIvvlBY/maxresdefault.jpg",
    "type": "video",
    "type_title": "video",
    "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
  }, {
    "title": "Post about something",
    "image": "https://www.livarava.com/static/livarava/img/neurons/post.png",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "type": "post",
    "type_title": "post",
    "created": new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now()))
  }
];

neurons = neurons.map((neuron, index) => {
  var stats,
    created,
    feed,
    datesFrom = Date.now() - 24 * 60 * 60 * 1000;

  stats = {
    users: _.random(10, 90),
    axons: _.random(10, 150),
    views: _.random(100, 500)
  };

  created = new Date(_.random(datesFrom, Date.now()));

  if (neuron.type === 'rss' && !_.isEmpty(neuron.feed)) {
    feed = _(neuron.feed).map(feedItem => {
        return Ember.Object.create(_.extend(feedItem, {
          date: new Date(_.random(datesFrom, Date.now())),
          image: "https://www.livarava.com/static/livarava/img/neurons/link.png",
          "text": feedItem.text + `Lorem ipsum dolor sit amet, prima elaboraret in eum, ex nibh bonorum definitiones pri. Simul albucius id sea, ut cum adhuc consetetur, novum consulatu te eam. Adhuc praesent necessitatibus mea eu. Audire appellantur an eum, his id natum novum consetetur. Cu per ceteros appareat constituto.
              Eum novum graece definitionem te, cu nec deleniti dissentias. Ex pro corpora interesset, ex cibo iracundia mei, torquatos disputationi est an. Id usu dolorem eligendi hendrerit, eum ubique corrumpit cu. His ei ipsum melius, posse temporibus delicatissimi his in. Ut mel nullam vituperatoribus, mea liber option mandamus at, sed in dicat urbanitas temporibus.
              Pri no labore dictas fuisset, in iusto invenire nam. Quo at ancillae tractatos dignissim, sit ex possim oblique. Eam sonet pericula maiestatis ei, ad possit nostrud periculis ius. Ad sit posse nonumy, ea nihil euripidis honestatis mea.
              An duo platonem suavitate. Quo facer offendit torquatos ex, sea summo petentium ad. Vim ei dolores phaedrum. Movet possit essent mel ea, wisi signiferumque ius in, ut his tempor cetero omittantur. Cu tale enim has, eam soleat oporteat facilisi an, ne usu accumsan explicari iracundia.
              Mea oporteat insolens voluptatibus ex. Ut per saepe eirmod. Mei docendi imperdiet reprehendunt cu, errem appetere argumentum sea ad. Quot probo ponderum in est, eu facilis interpretaris quo.`

        }));
      })
      .orderBy('date', 'desc')
      .value();
  }

  return _.extend(neuron, {
    stats: stats,
    created: created,
    feed: feed,
    id: index + 1,
    comments: []
  });
});

neurons = _.orderBy(neurons, 'created', 'desc');

export default neurons;
