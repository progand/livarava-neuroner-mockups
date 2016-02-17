/*jshint node:true*/
module.exports = function (app) {
  var express = require('express');
  var neuronRouter = express.Router();
  var data =
    {
      "data": {
        "attributes": {
          "abstract": "neuron",
          "axon_count": 1,
          "connections": [
            {
              "abstract": "project",
              "amount": 606.9,
              "axon_count": 14,
              "comments_count": 2,
              "created": "2015-09-16 11:34:37",
              "description": "<a title=\"Link: http://bnhsgroup.com.ua\" href=\"http://bnsgroup.com.ua\">http://bnsgroup.com.ua</a><br>\u0410\u0433\u0440\u043e\u043f\u0440\u043e\u0435\u043a\u0442\u044b \u043e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0435\u043c\u043b\u0435\u0434\u0435\u043b\u0438\u044f",
              "header": "BNS Group",
              "id": 28047,
              "image": "https://dev.livarava.com/static/livarava/img/neurons/project.png",
              "meta_author": "Maks  Seo",
              "meta_description": "\u0410\u0433\u0440\u043e\u043f\u0440\u043e\u0435\u043a\u0442\u044b \u043e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0437\u0435\u043c\u043b\u0435\u0434\u0435\u043b\u0438\u044f",
              "meta_image": "http://bnsgroup.com.ua/wp-content/themes/bns/images/logo22.png",
              "meta_keywords": "\u0430\u0433\u0440\u043e\u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u043e\u0440\u0433\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e, group",
              "meta_title": "BNS Group",
              "project_type": "external",
              "slug": "bns-group",
              "subscriber_count": 5,
              "title": "BNS Group",
              "type": "project",
              "uid": "e975aa38-5c66-11e5-88a8-040146cb5001",
              "updated": "2016-02-16 16:35:21",
              "views": 277,
              "weight": 35
            }
          ],
          "created": "2015-09-17 18:21:42",
          "header": "http://bnhsgroup.com.ua/",
          "image": "https://dev.livarava.com/static/livarava/img/neurons/link.png",
          //image_url: "https://i.imgur.com/I2bTvaI.png",
          "link_url": "http://bnhsgroup.com.ua/",
          "meta_author": "Artem Kariavka",
          "meta_keywords": "BNS Group | Website,BNS Group",
          "meta_title": "BNS Group | Website",
          "subscriber_count": 1,
          "title": "http://bnhsgroup.com.ua/",
          "type": "link",
          "uid": "f2141960-5d68-11e5-ac32-040146cb5001",
          "updated": "2016-02-16 16:32:49",
          "url": "http://bnhsgroup.com.ua/",
          "views": 40,
          "weight": 3
        },
        "id": 33457,
        "type": "neuron"
      },
      "links": {
        "self": "https://dev.livarava.com/api/v2/neuron/33457/"
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
