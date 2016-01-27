"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('livarava-neuroner-mockups/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'livarava-neuroner-mockups/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _livaravaNeuronerMockupsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _livaravaNeuronerMockupsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _livaravaNeuronerMockupsConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _livaravaNeuronerMockupsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('livarava-neuroner-mockups/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'livarava-neuroner-mockups/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _livaravaNeuronerMockupsConfigEnvironment) {

  var name = _livaravaNeuronerMockupsConfigEnvironment['default'].APP.name;
  var version = _livaravaNeuronerMockupsConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('livarava-neuroner-mockups/components/content-editable', ['exports', 'ember-content-editable/components/content-editable'], function (exports, _emberContentEditableComponentsContentEditable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberContentEditableComponentsContentEditable['default'];
    }
  });
});
define('livarava-neuroner-mockups/components/neuron-info', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('livarava-neuroner-mockups/components/neuron-rss-feed', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports['default'] = _ember['default'].Component.extend({
    isRSS: _ember['default'].computed('model.url', function () {
      return (/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(this.get('model.url'))
      );
    }),
    rssFeed: _ember['default'].computed('model.url', function () {
      var rssFeed = [],
          firstWord,
          secondWord,
          thirdWord;

      if (_.isEmpty(this.get('model.url'))) {
        return rssFeed;
      }

      var _$chain$words$without$value = _.chain(this.get('model.url')).words().without('feed', 'http', 'https', 'com', 'org').value();

      var _$chain$words$without$value2 = _slicedToArray(_$chain$words$without$value, 3);

      firstWord = _$chain$words$without$value2[0];
      secondWord = _$chain$words$without$value2[1];
      thirdWord = _$chain$words$without$value2[2];

      _.times(10, function (index) {
        rssFeed.push({
          image: '/img/feed/' + _.random(0, 2) + '.png',
          title: 'About ' + firstWord + ' and ' + secondWord + ' #' + index,
          date: new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now())),
          text: 'Lorem ipsum dolor sit amet <span class="text-success">' + firstWord + '</span>, consectetur adipiscing elit, sed do eiusmod tempor <span class="text-success">' + secondWord + '</span> incididunt ut labore et dolore magna aliqua <span class="text-success">' + firstWord + '</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco <span class="text-success">' + secondWord + '</span> laboris nisi ut aliquip ex ea commodo consequat...'

        });
      });

      return rssFeed;
    })
  });
});
define('livarava-neuroner-mockups/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('livarava-neuroner-mockups/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('livarava-neuroner-mockups/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _emberMomentHelpersMomentCalendar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar['default'];
    }
  });
  Object.defineProperty(exports, 'momentCalendar', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar.momentCalendar;
    }
  });
});
define('livarava-neuroner-mockups/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('livarava-neuroner-mockups/helpers/moment-format', ['exports', 'ember', 'livarava-neuroner-mockups/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _livaravaNeuronerMockupsConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_livaravaNeuronerMockupsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('livarava-neuroner-mockups/helpers/moment-from-now', ['exports', 'ember', 'livarava-neuroner-mockups/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _livaravaNeuronerMockupsConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_livaravaNeuronerMockupsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('livarava-neuroner-mockups/helpers/moment-to-now', ['exports', 'ember', 'livarava-neuroner-mockups/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _livaravaNeuronerMockupsConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_livaravaNeuronerMockupsConfigEnvironment['default'], 'moment.allowEmpty')
  });
});
define('livarava-neuroner-mockups/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'livarava-neuroner-mockups/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _livaravaNeuronerMockupsConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_livaravaNeuronerMockupsConfigEnvironment['default'].APP.name, _livaravaNeuronerMockupsConfigEnvironment['default'].APP.version)
  };
});
define('livarava-neuroner-mockups/initializers/export-application-global', ['exports', 'ember', 'livarava-neuroner-mockups/config/environment'], function (exports, _ember, _livaravaNeuronerMockupsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_livaravaNeuronerMockupsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _livaravaNeuronerMockupsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_livaravaNeuronerMockupsConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('livarava-neuroner-mockups/router', ['exports', 'ember', 'livarava-neuroner-mockups/config/environment'], function (exports, _ember, _livaravaNeuronerMockupsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _livaravaNeuronerMockupsConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('livarava-neuroner-mockups/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return {
        name: 'Example RSS Neuron',
        description: 'This is description of the neuron. You can edit it as well as URL above.',
        url: 'http://blog.aweber.com/feed',
        stats: {
          users: 15,
          axons: 35,
          views: 255
        }
      };
    }
  });
});
define('livarava-neuroner-mockups/services/moment', ['exports', 'ember', 'livarava-neuroner-mockups/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _livaravaNeuronerMockupsConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_livaravaNeuronerMockupsConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define("livarava-neuroner-mockups/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "livarava-neuroner-mockups/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-light bg-faded");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "class", "navbar-brand");
        dom.setAttribute(el3, "href", "#");
        var el4 = dom.createTextNode("Neuroner");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "nav navbar-nav");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "class", "nav-item active");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("a");
        dom.setAttribute(el5, "class", "nav-link");
        dom.setAttribute(el5, "href", "#");
        var el6 = dom.createTextNode("Home ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "sr-only");
        var el7 = dom.createTextNode("(current)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("article");
        dom.setAttribute(el1, "class", "container m-t-2 m-b-3");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "bg-faded");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container text-muted");
        var el3 = dom.createTextNode("\n        Designed and built with all the love in the world by LivaRava Team\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [13, 2], [13, 12]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("livarava-neuroner-mockups/templates/components/neuron-info", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "livarava-neuroner-mockups/templates/components/neuron-info.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "list-inline");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "list-inline-item");
        var el3 = dom.createTextNode("Users: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "label label-info");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "list-inline-item");
        var el3 = dom.createTextNode("Axons: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "label label-primary");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "list-inline-item");
        var el3 = dom.createTextNode("Views: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "label label-success");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "form-inline");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        dom.setAttribute(el3, "for", "exampleInputName2");
        var el4 = dom.createTextNode("URL:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3, "class", "form-control-static text-success");
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "m-t-1 m-b-2 text-muted");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5, 1]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [4, 1, 3]), 1, 1);
        morphs[5] = dom.createMorphAt(dom.childAt(fragment, [6]), 1, 1);
        morphs[6] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["content", "model.name", ["loc", [null, [1, 4], [1, 18]]]], ["content", "model.stats.users", ["loc", [null, [4, 71], [4, 92]]]], ["content", "model.stats.axons", ["loc", [null, [5, 74], [5, 95]]]], ["content", "model.stats.views", ["loc", [null, [6, 74], [6, 95]]]], ["inline", "content-editable", [], ["value", ["subexpr", "@mut", [["get", "model.url", ["loc", [null, [14, 35], [14, 44]]]]], [], []], "placeholder", "Input RSS URL", "type", "text", "allowNewlines", false], ["loc", [null, [14, 10], [14, 107]]]], ["inline", "content-editable", [], ["value", ["subexpr", "@mut", [["get", "model.description", ["loc", [null, [20, 27], [20, 44]]]]], [], []], "placeholder", "Edit description...", "type", "text"], ["loc", [null, [20, 2], [20, 93]]]], ["content", "yield", ["loc", [null, [23, 0], [23, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("livarava-neuroner-mockups/templates/components/neuron-rss-feed", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 19,
                "column": 4
              }
            },
            "moduleName": "livarava-neuroner-mockups/templates/components/neuron-rss-feed.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "media");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "media-left");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("img");
            dom.setAttribute(el3, "class", "media-object");
            dom.setAttribute(el3, "width", "60");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "media-body");
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("h4");
            dom.setAttribute(el3, "class", "media-heading ");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("p");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("ul");
            dom.setAttribute(el3, "class", "list-inline pull-left");
            var el4 = dom.createTextNode("\n                    ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("li");
            var el5 = dom.createElement("span");
            dom.setAttribute(el5, "class", "text-muted");
            var el6 = dom.createTextNode("Published:");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode(" ");
            dom.appendChild(el4, el5);
            var el5 = dom.createComment("");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n                ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [1, 1]);
            var element2 = dom.childAt(element0, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element1, 'src');
            morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
            morphs[2] = dom.createUnsafeMorphAt(dom.childAt(element2, [3]), 0, 0);
            morphs[3] = dom.createMorphAt(dom.childAt(element2, [5, 1]), 2, 2);
            return morphs;
          },
          statements: [["attribute", "src", ["concat", [["get", "rssFeedItem.image", ["loc", [null, [7, 60], [7, 77]]]]]]], ["content", "rssFeedItem.title", ["loc", [null, [11, 43], [11, 64]]]], ["content", "rssFeedItem.text", ["loc", [null, [13, 19], [13, 41]]]], ["inline", "moment-to-now", [["get", "rssFeedItem.date", ["loc", [null, [15, 83], [15, 99]]]]], [], ["loc", [null, [15, 67], [15, 101]]]]],
          locals: ["rssFeedItem"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes", "wrong-type"]
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 21,
              "column": 0
            }
          },
          "moduleName": "livarava-neuroner-mockups/templates/components/neuron-rss-feed.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          var el2 = dom.createTextNode("RSS Feed");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          return morphs;
        },
        statements: [["block", "each", [["get", "rssFeed", ["loc", [null, [4, 12], [4, 19]]]]], [], 0, null, ["loc", [null, [4, 4], [19, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 0
          }
        },
        "moduleName": "livarava-neuroner-mockups/templates/components/neuron-rss-feed.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "isRSS", ["loc", [null, [1, 6], [1, 11]]]]], [], 0, null, ["loc", [null, [1, 0], [21, 7]]]], ["content", "yield", ["loc", [null, [26, 0], [26, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("livarava-neuroner-mockups/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 31
          }
        },
        "moduleName": "livarava-neuroner-mockups/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "neuron-info", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 20], [1, 25]]]]], [], []]], ["loc", [null, [1, 0], [1, 27]]]], ["inline", "neuron-rss-feed", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 24], [3, 29]]]]], [], []]], ["loc", [null, [3, 0], [3, 31]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('livarava-neuroner-mockups/config/environment', ['ember'], function(Ember) {
  var prefix = 'livarava-neuroner-mockups';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("livarava-neuroner-mockups/app")["default"].create({"name":"livarava-neuroner-mockups","version":"0.0.0+d7fd4b2d"});
}

/* jshint ignore:end */
//# sourceMappingURL=livarava-neuroner-mockups.map