/*jshint node:true*/
module.exports = function (app) {
  var express = require('express');
  var neuronRouter = express.Router();
  var data =
    {
      "data": {
        "attributes": {
          "abstract": "neuron",
          "axon_count": 11,
          "connections": [
            {
              "abstract": "neuron",
              "axon_count": 4,
              "created": "2016-02-14 09:38:28",
              "header": "Apache Wicket",
              "id": 0,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "\u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u043e\u043a\u043e\u043b\u043e\u0432",
              "meta_keywords": "Apache Wicket,JavaScript,Java,HTML5,Framework,AJAX,Apache,Home | Apache Wicket,open source",
              "meta_title": "Apache Wicket - LivaRava",
              "subscriber_count": 2,
              "summary": "open source, component oriented, serverside, Java web application framework",
              "title": "Apache Wicket",
              "type": "text",
              "uid": "b3bb990c-d2fe-11e5-b8d1-0401894baf01",
              "updated": "2016-02-16 15:43:46",
              "views": 24,
              "weight": 12
            },
            {
              "abstract": "neuron",
              "created": "2015-12-02 15:54:21",
              "header": "I2bTvaI",
              "id": 35998,
              "image": "https://i.imgur.com/I2bTvaI.png",
              "image_type": "png",
              "image_url": "https://i.imgur.com/I2bTvaI.png",
              "meta_author": "Konstantin Oliferchuk",
              "meta_keywords": "JavaScript,JavaScript",
              "meta_title": "JavaScript",
              "title": "https://i.imgur.com/I2bTvaI.png",
              "type": "image",
              "uid": "f3b76792-990c-11e5-a2ff-0401894baf01",
              "updated": "2016-02-15 14:54:31",
              "url": "https://i.imgur.com/I2bTvaI.png",
              "views": 21,
              "weight": 2
            },
            {
              "abstract": "neuron",
              "created": "2015-12-02 15:49:38",
              "header": "\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0435\u0431\u043d\u0438\u043a JavaScript",
              "id": 35994,
              "image": "/static/livarava/img/neurons/link.png",
              "link_url": "https://learn.javascript.ru",
              "meta_author": "Konstantin Oliferchuk",
              "meta_keywords": "\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0435\u0431\u043d\u0438\u043a JavaScript,JavaScript",
              "meta_title": "\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0443\u0447\u0435\u0431\u043d\u0438\u043a JavaScript - LivaRava",
              "title": "https://learn.javascript.ru",
              "type": "link",
              "uid": "4b25a7c4-990c-11e5-a2ff-0401894baf01",
              "updated": "2016-02-15 14:54:32",
              "url": "https://learn.javascript.ru",
              "views": 24,
              "weight": 2
            },
            {
              "abstract": "neuron",
              "axon_count": 3,
              "created": "2015-09-16 06:27:52",
              "header": "Intro.js",
              "id": 25519,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_keywords": "Intro.js,JavaScript,Intro.js | Better introductions for websites and features with a step-by-step guide for your projects.",
              "meta_title": "Intro.js - LivaRava",
              "subscriber_count": 1,
              "summary": "Better introductions for websites and features with a step-by-step guide for your projects.",
              "title": "Intro.js",
              "type": "text",
              "uid": "0f4ab74c-5c3c-11e5-ab66-040146cb5001",
              "updated": "2016-02-13 15:32:40",
              "views": 79,
              "weight": 7
            },
            {
              "abstract": "neuron",
              "axon_count": 16,
              "comments_count": 1,
              "created": "2015-08-04 12:04:44",
              "header": "Ember.js",
              "id": 32946,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "\u0410\u043d\u0434\u0440\u0456\u0439 \u041b\u0430\u0447",
              "meta_keywords": "Ember.js,Ember.js,Ember.js funny logo,Ember.js funny animation,Why I Chose Ember.js",
              "meta_title": "Ember.js - LivaRava",
              "subscriber_count": 3,
              "summary": "A framework for creating ambitious web applications.",
              "title": "Ember.js",
              "type": "text",
              "uid": "fe5e85ec-3aa0-11e5-8b26-040146cb5001",
              "updated": "2016-02-08 10:27:17",
              "views": 71,
              "weight": 21
            },
            {
              "abstract": "neuron",
              "created": "2015-05-09 03:24:21",
              "header": "javascript - MongoDB + Node.js + AJAX solution for doing autocomplete search - Stack Overflow",
              "id": 24503,
              "image": "/static/livarava/img/neurons/link.png",
              "link_url": "http://stackoverflow.com/questions/9042008/mongodb-node-js-ajax-solution-for-doing-autocomplete-search",
              "meta_author": "Artem Kariavka",
              "meta_keywords": "javascript - MongoDB + Node.js + AJAX solution for doing autocomplete search - Stack Overflow",
              "meta_title": "javascript - MongoDB + Node.js + AJAX solution for doing autocomplete search - Stack Overflow - LivaRava",
              "title": "http://stackoverflow.com/questions/9042008/mongodb-node-js-ajax-solution-for-doing-autocomplete-search",
              "type": "link",
              "uid": "e277b83e-f5fa-11e4-9099-040146cb5001",
              "updated": "2016-02-13 09:14:29",
              "url": "http://stackoverflow.com/questions/9042008/mongodb-node-js-ajax-solution-for-doing-autocomplete-search",
              "views": 169,
              "weight": 11
            },
            {
              "abstract": "neuron",
              "created": "2015-04-25 11:57:28",
              "header": "Chart.js",
              "id": 22356,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_keywords": "Chart.js",
              "meta_title": "Chart.js - LivaRava",
              "summary": "Open source HTML5 Charts for your website. Simple, clean and engaging charts for designers and developers.",
              "title": "Chart.js",
              "type": "text",
              "uid": "3ef12ba4-eb42-11e4-aafb-040146cb5001",
              "updated": "2016-02-05 18:33:32",
              "views": 121,
              "weight": 11
            },
            {
              "abstract": "neuron",
              "axon_count": 8,
              "created": "2015-02-26 07:59:52",
              "header": "Programming language",
              "id": 12378,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_image": "/static/livarava/img/neurons/neuron.png",
              "meta_keywords": "Programming language,Python,PHP,JavaScript,Java,ActionScript,Perl",
              "meta_title": "Programming language - LivaRava",
              "subscriber_count": 2,
              "title": "Programming language",
              "type": "text",
              "uid": "71c7095a-bd8d-11e4-ac52-040105750d01",
              "updated": "2016-02-04 22:03:55",
              "views": 177,
              "weight": 20
            },
            {
              "abstract": "neuron",
              "axon_count": 9,
              "created": "2015-02-03 12:24:27",
              "header": "PHP",
              "id": 9809,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_description": "PHP - LivaRava",
              "meta_image": "/static/livarava/img/neurons/neuron.png",
              "meta_keywords": "PHP,\u0410\u043d\u0434\u0440\u0456\u0439 \u041b\u0430\u0447,Programming language,DataLife Engine,JavaScript,WordPress,CSS,PHP: Hypertext Preprocessor,HTML",
              "meta_title": "PHP - LivaRava",
              "subscriber_count": 5,
              "summary": "PHP is a server-side scripting language created in 1995 and designed for web development but also used as a general-purpose programming language. As of January 2013, PHP was installed on more than 240 million websites (39% of those sampled) and 2.1 million web servers. Originally created by Rasmus Lerdorf in 1994, the reference implementation of PHP (powered by the Zend Engine) is now produced by The PHP Group. While PHP originally stood for Personal Home Page, it now stands for PHP: Hypertext Preprocessor, which is a recursive backronym.",
              "title": "PHP",
              "type": "text",
              "uid": "9887ff90-ab9f-11e4-adda-040105750d01",
              "updated": "2016-02-10 09:56:22",
              "views": 248,
              "weight": 24
            },
            {
              "abstract": "neuron",
              "axon_count": 6,
              "created": "2015-02-03 12:24:21",
              "header": "WordPress",
              "id": 9808,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_description": "WordPress - LivaRava",
              "meta_image": "/static/livarava/img/neurons/neuron.png",
              "meta_keywords": "WordPress,PHP,CMS,JavaScript,CSS,HTML,WordPress \u203a Blog Tool, Publishing Platform, and CMS",
              "meta_title": "WordPress - LivaRava",
              "subscriber_count": 1,
              "title": "WordPress",
              "type": "text",
              "uid": "9516b4be-ab9f-11e4-adda-040105750d01",
              "updated": "2016-02-09 03:05:42",
              "views": 182,
              "weight": 14
            },
            {
              "abstract": "neuron",
              "axon_count": 8,
              "created": "2015-02-03 12:19:19",
              "header": "Bootstrap",
              "id": 9806,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_description": "Bootstrap - LivaRava",
              "meta_image": "/static/livarava/img/neurons/neuron.png",
              "meta_keywords": "Bootstrap,JavaScript,CSS,HTML,Frontend Web,jQuery,HTML5",
              "meta_title": "Bootstrap - LivaRava",
              "subscriber_count": 2,
              "summary": "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web. Go to Bootstrap.",
              "title": "Bootstrap",
              "type": "text",
              "uid": "e120d4c6-ab9e-11e4-adda-040105750d01",
              "updated": "2016-02-09 02:09:34",
              "views": 191,
              "weight": 17
            },
            {
              "abstract": "neuron",
              "axon_count": 2,
              "created": "2015-02-03 12:19:12",
              "header": "jQuery",
              "id": 9805,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_description": "jQuery - LivaRava",
              "meta_image": "/static/livarava/img/neurons/neuron.png",
              "meta_keywords": "jQuery,JavaScript,CSS,HTML,Frontend Web,Bootstrap,HTML5",
              "meta_title": "jQuery - LivaRava",
              "subscriber_count": 2,
              "title": "jQuery",
              "type": "text",
              "uid": "dcfe407c-ab9e-11e4-a398-040105750d01",
              "updated": "2016-02-15 12:41:49",
              "views": 194,
              "weight": 7
            },
            {
              "abstract": "neuron",
              "axon_count": 3,
              "created": "2015-02-03 12:16:27",
              "header": "CSS",
              "id": 9800,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_description": "CSS - LivaRava",
              "meta_image": "/static/livarava/img/neurons/neuron.png",
              "meta_keywords": "CSS,PHP,JavaScript,WordPress,HTML,\u041a\u0430\u0441\u043a\u0430\u0434\u043d\u044b\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441\u0442\u0438\u043b\u0435\u0439,Cascading Style Sheets,Frontend Web,Bootstrap,jQuery,HTML5",
              "meta_title": "CSS - LivaRava",
              "subscriber_count": 2,
              "title": "CSS",
              "type": "text",
              "uid": "7a89b552-ab9e-11e4-adda-040105750d01",
              "updated": "2016-02-05 10:51:45",
              "views": 190,
              "weight": 6
            },
            {
              "abstract": "neuron",
              "axon_count": 4,
              "created": "2015-02-03 12:16:09",
              "header": "HTML5",
              "id": 9799,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_description": "HTML5 - LivaRava",
              "meta_image": "/static/livarava/img/neurons/neuron.png",
              "meta_keywords": "HTML5,JavaScript,CSS,HTML,Frontend Web,Bootstrap,jQuery",
              "meta_title": "HTML5 - LivaRava",
              "subscriber_count": 1,
              "title": "HTML5",
              "type": "text",
              "uid": "6fda993c-ab9e-11e4-adda-040105750d01",
              "updated": "2016-02-16 15:35:28",
              "views": 189,
              "weight": 8
            },
            {
              "abstract": "neuron",
              "axon_count": 3,
              "created": "2015-02-03 12:16:06",
              "header": "HTML",
              "id": 9798,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_description": "HTML - LivaRava",
              "meta_image": "https://www.livarava.com/static/livarava/img/neurons/text.png",
              "meta_keywords": "HTML,PHP,JavaScript,Bootstrap,WordPress,HTML5,jQuery,CSS,Flask: HTML to PDF,Frontend Web",
              "meta_title": "HTML - LivaRava",
              "subscriber_count": 3,
              "title": "HTML",
              "type": "text",
              "uid": "6dcb42a4-ab9e-11e4-adda-040105750d01",
              "updated": "2016-02-15 00:52:00",
              "views": 204,
              "weight": 7
            },
            {
              "abstract": "neuron",
              "created": "2015-02-03 12:15:54",
              "header": "Frontend Web",
              "id": 9797,
              "image": "/static/livarava/img/neurons/text.png",
              "meta_author": "Artem Kariavka",
              "meta_description": "Frontend Web - LivaRava",
              "meta_image": "/static/livarava/img/neurons/neuron.png",
              "meta_keywords": "Frontend Web,JavaScript,CSS,HTML,Bootstrap,jQuery,HTML5",
              "meta_title": "Frontend Web - LivaRava",
              "subscriber_count": 0,
              "title": "Frontend Web",
              "type": "text",
              "uid": "66c7e39a-ab9e-11e4-adda-040105750d01",
              "updated": "2016-02-12 20:55:00",
              "views": 174,
              "weight": 2
            }
          ],
          "created": "2015-02-03 12:19:07",
          "header": "JavaScript",
          "meta_author": "Artem Kariavka",
          "meta_description": "JavaScript - LivaRava",
          "meta_image": "/static/livarava/img/neurons/neuron.png",
          "meta_keywords": "JavaScript,\u0410\u043d\u0434\u0440\u0456\u0439 \u041b\u0430\u0447,Programming language,PHP,WordPress,CSS,HTML,Frontend Web,Bootstrap,jQuery,HTML5",
          "meta_title": "JavaScript - LivaRava",
          "subscriber_count": 6,
          "title": "JavaScript",
          "type": "text",
          "uid": "d9fdcb4a-ab9e-11e4-adda-040105750d01",
          "url": "https://wicket.apache.org/",
          "updated": "2016-02-16 16:53:58",
          "views": 212,
          "weight": 23
        },
        "id": 9804,
        "type": "neuron"
      },
      "links": {
        "self": "https://dev.livarava.com/api/v2/neuron/9804/"
      }
    }
    ;


  neuronRouter.get('/', function (req, res) {
    res.send(data);
  });

  neuronRouter.post('/', function (req, res) {
    res.status(201).end();
  });

  neuronRouter.get('/:id', function (req, res) {
    data.id = req.query.id;
    res.send(data);
  });

  neuronRouter.put('/:id', function (req, res) {
    res.send({
      'neuron': {
        id: req.params.id
      }
    });
  });

  neuronRouter.delete('/:id', function (req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/neuron', require('body-parser'));
  app.use('/api/v2/neuron', neuronRouter);
};
