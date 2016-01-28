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
define('livarava-neuroner-mockups/components/neuron-additional-info', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    showingConnections: false,
    actions: {
      showInfo: function showInfo() {
        this.set('showingConnections', false);
      },
      showConnections: function showConnections() {
        this.set('showingConnections', true);
      }
    }
  });
});
define('livarava-neuroner-mockups/components/neuron-article', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('livarava-neuroner-mockups/components/neuron-connections', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('livarava-neuroner-mockups/components/neuron-general-info', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('livarava-neuroner-mockups/components/neuron-rss-feed', ['exports', 'ember'], function (exports, _ember) {
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports['default'] = _ember['default'].Component.extend({
    actions: {
      showMore: function showMore() {
        this.set('feedsToShow', this.get('feedsToShow') + 4);
      }
    },
    isRSS: _ember['default'].computed('model.url', function () {
      return (/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(this.get('model.url'))
      );
    }),
    feedsToShow: 3,
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

      var _$chain$words$without$value2$0 = _$chain$words$without$value2[0];
      firstWord = _$chain$words$without$value2$0 === undefined ? 'news' : _$chain$words$without$value2$0;
      var _$chain$words$without$value2$1 = _$chain$words$without$value2[1];
      secondWord = _$chain$words$without$value2$1 === undefined ? 'interesting' : _$chain$words$without$value2$1;
      var _$chain$words$without$value2$2 = _$chain$words$without$value2[2];
      thirdWord = _$chain$words$without$value2$2 === undefined ? 'fascinating' : _$chain$words$without$value2$2;

      _.times(11, function (index) {
        rssFeed.push({
          imageIndex: _.random(0, 2),
          title: 'About ' + firstWord + ' and ' + secondWord + ' #' + index,
          date: new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now())),
          text: 'Lorem ipsum dolor sit amet <span class="text-success">' + firstWord + '</span>, consectetur adipiscing elit, sed do eiusmod tempor <span class="text-success">' + secondWord + '</span> incididunt ut labore et dolore magna aliqua <span class="text-success">' + thirdWord + '</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco <span class="text-success">' + secondWord + '</span> laboris nisi ut aliquip ex ea commodo consequat...'

        });
      });

      return rssFeed;
    }),
    rssFeedVisible: _ember['default'].computed('rssFeed', 'feedsToShow', function () {
      return this.get('rssFeed').slice(0, this.get('feedsToShow'));
    }),
    hasMore: _ember['default'].computed('rssFeed', 'feedsToShow', function () {
      return this.get('rssFeed').length > this.get('feedsToShow');
    })
  });
});
define('livarava-neuroner-mockups/components/neuron-specific-info', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isRSS: _ember['default'].computed('model.url', function () {
      return (/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(this.get('model.url'))
      );
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
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return {
        name: 'Example RSS Neuron',
        description: 'This is description of the neuron. You can edit it as well as URL above.',
        url: 'http://blog.aweber.com/feed',
        stats: {
          users: _.random(10, 90),
          axons: _.random(10, 150),
          views: _.random(100, 500)
        },
        feed: _ember['default'].computed('model.url', function () {
          var rssFeed = [],
              firstWord,
              secondWord,
              thirdWord;

          if (_.isEmpty(this.get('model.url'))) {
            return rssFeed;
          }

          var _$chain$words$without$value = _.chain(this.get('model.url')).words().without('feed', 'http', 'https', 'com', 'org').value();

          var _$chain$words$without$value2 = _slicedToArray(_$chain$words$without$value, 3);

          var _$chain$words$without$value2$0 = _$chain$words$without$value2[0];
          firstWord = _$chain$words$without$value2$0 === undefined ? 'news' : _$chain$words$without$value2$0;
          var _$chain$words$without$value2$1 = _$chain$words$without$value2[1];
          secondWord = _$chain$words$without$value2$1 === undefined ? 'interesting' : _$chain$words$without$value2$1;
          var _$chain$words$without$value2$2 = _$chain$words$without$value2[2];
          thirdWord = _$chain$words$without$value2$2 === undefined ? 'fascinating' : _$chain$words$without$value2$2;

          _.times(11, function (index) {
            rssFeed.push({
              imageIndex: _.random(0, 2),
              title: 'About ' + firstWord + ' and ' + secondWord + ' #' + index,
              date: new Date(_.random(Date.now() - 24 * 60 * 60 * 1000, Date.now())),
              text: 'Lorem ipsum dolor sit amet <span class="text-success">' + firstWord + '</span>, consectetur adipiscing elit, sed do eiusmod tempor <span class="text-success">' + secondWord + '</span> incididunt ut labore et dolore magna aliqua <span class="text-success">' + thirdWord + '</span>. Ut enim ad minim veniam, quis nostrud exercitation ullamco <span class="text-success">' + secondWord + '</span> laboris nisi ut aliquip ex ea commodo consequat...'

            });
          });

          return rssFeed;
        })
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
define("livarava-neuroner-mockups/templates/components/neuron-additional-info", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "livarava-neuroner-mockups/templates/components/neuron-additional-info.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "neuron-connections", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [12, 29], [12, 34]]]]], [], []]], ["loc", [null, [12, 2], [12, 36]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "livarava-neuroner-mockups/templates/components/neuron-additional-info.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "neuron-specific-info", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [14, 31], [14, 36]]]]], [], []]], ["loc", [null, [14, 2], [14, 38]]]]],
        locals: [],
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
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "livarava-neuroner-mockups/templates/components/neuron-additional-info.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "clearfix");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "btn-group pull-sm-right");
        dom.setAttribute(el2, "data-toggle", "buttons");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("Info");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        var el4 = dom.createTextNode("\n            Axons\n        ");
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
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
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
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element1, 'class');
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createAttrMorph(element2, 'class');
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[5] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["btn btn-info ", ["subexpr", "if", [["get", "showingConnections", ["loc", [null, [3, 41], [3, 59]]]], "btn-info-outline"], [], ["loc", [null, [3, 36], [3, 80]]]]]]], ["element", "action", ["showInfo"], [], ["loc", [null, [3, 82], [3, 103]]]], ["attribute", "class", ["concat", ["btn btn-info ", ["subexpr", "unless", [["get", "showingConnections", ["loc", [null, [4, 45], [4, 63]]]], "btn-info-outline"], [], ["loc", [null, [4, 36], [4, 84]]]]]]], ["element", "action", ["showConnections"], [], ["loc", [null, [4, 86], [4, 114]]]], ["block", "if", [["get", "showingConnections", ["loc", [null, [11, 6], [11, 24]]]]], [], 0, 1, ["loc", [null, [11, 0], [15, 7]]]], ["content", "yield", ["loc", [null, [18, 0], [18, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("livarava-neuroner-mockups/templates/components/neuron-article", ["exports"], function (exports) {
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
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "livarava-neuroner-mockups/templates/components/neuron-article.hbs"
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
        var el1 = dom.createComment("");
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
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "neuron-general-info", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 28], [1, 33]]]]], [], []]], ["loc", [null, [1, 0], [1, 35]]]], ["inline", "neuron-additional-info", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 31], [2, 36]]]]], [], []]], ["loc", [null, [2, 0], [2, 38]]]], ["content", "yield", ["loc", [null, [4, 0], [4, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("livarava-neuroner-mockups/templates/components/neuron-connections", ["exports"], function (exports) {
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
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "livarava-neuroner-mockups/templates/components/neuron-connections.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h4");
        var el2 = dom.createTextNode("Axons - connected neurons");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [4, 0], [4, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("livarava-neuroner-mockups/templates/components/neuron-general-info", ["exports"], function (exports) {
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
        "moduleName": "livarava-neuroner-mockups/templates/components/neuron-general-info.hbs"
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
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 22,
                  "column": 14
                },
                "end": {
                  "line": 24,
                  "column": 14
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
              var el1 = dom.createTextNode("                  ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("p");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createUnsafeMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["content", "rssFeedItem.text", ["loc", [null, [23, 21], [23, 43]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 4
              },
              "end": {
                "line": 30,
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
            var el3 = dom.createElement("div");
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
            var el3 = dom.createElement("h5");
            dom.setAttribute(el3, "class", "media-heading ");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("                ");
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
            var element1 = dom.childAt(fragment, [1]);
            var element2 = dom.childAt(element1, [1, 1]);
            var element3 = dom.childAt(element1, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element2, 'class');
            morphs[1] = dom.createMorphAt(dom.childAt(element3, [1]), 0, 0);
            morphs[2] = dom.createMorphAt(element3, 3, 3);
            morphs[3] = dom.createMorphAt(dom.childAt(element3, [5, 1]), 2, 2);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["media-object feed-image-", ["get", "rssFeedItem.imageIndex", ["loc", [null, [16, 54], [16, 76]]]]]]], ["content", "rssFeedItem.title", ["loc", [null, [20, 43], [20, 64]]]], ["block", "if", [["get", "isFeedTextShown", ["loc", [null, [22, 20], [22, 35]]]]], [], 0, null, ["loc", [null, [22, 14], [24, 21]]]], ["inline", "moment-to-now", [["get", "rssFeedItem.date", ["loc", [null, [26, 83], [26, 99]]]]], [], ["loc", [null, [26, 67], [26, 101]]]]],
          locals: ["rssFeedItem"],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 31,
                "column": 4
              },
              "end": {
                "line": 35,
                "column": 4
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
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "m-t-2");
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2, "class", "btn btn-primary center-block");
            var el3 = dom.createTextNode("More");
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
            var element0 = dom.childAt(fragment, [1, 1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["showMore"], [], ["loc", [null, [33, 57], [33, 78]]]]],
          locals: [],
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
              "line": 37,
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
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "clearfix");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          dom.setAttribute(el2, "class", "pull-sm-left");
          var el3 = dom.createTextNode("RSS Feed");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2, "class", "c-input c-checkbox pull-sm-right");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "c-indicator");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            Show text\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]), 1, 1);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
          return morphs;
        },
        statements: [["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "isFeedTextShown", ["loc", [null, [7, 42], [7, 57]]]]], [], []]], ["loc", [null, [7, 10], [7, 59]]]], ["block", "each", [["get", "rssFeedVisible", ["loc", [null, [13, 12], [13, 26]]]]], [], 0, null, ["loc", [null, [13, 4], [30, 13]]]], ["block", "if", [["get", "hasMore", ["loc", [null, [31, 10], [31, 17]]]]], [], 1, null, ["loc", [null, [31, 4], [35, 11]]]]],
        locals: [],
        templates: [child0, child1]
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
            "line": 43,
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
      statements: [["block", "if", [["get", "isRSS", ["loc", [null, [1, 6], [1, 11]]]]], [], 0, null, ["loc", [null, [1, 0], [37, 7]]]], ["content", "yield", ["loc", [null, [42, 0], [42, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("livarava-neuroner-mockups/templates/components/neuron-specific-info", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
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
              "column": 0
            }
          },
          "moduleName": "livarava-neuroner-mockups/templates/components/neuron-specific-info.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "neuron-rss-feed", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [2, 26], [2, 31]]]]], [], []]], ["loc", [null, [2, 2], [2, 33]]]]],
        locals: [],
        templates: []
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
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "livarava-neuroner-mockups/templates/components/neuron-specific-info.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
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
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "isRSS", ["loc", [null, [1, 6], [1, 11]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["content", "yield", ["loc", [null, [6, 0], [6, 9]]]]],
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
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 30
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "neuron-article", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 23], [1, 28]]]]], [], []]], ["loc", [null, [1, 0], [1, 30]]]]],
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
  require("livarava-neuroner-mockups/app")["default"].create({"name":"livarava-neuroner-mockups","version":"0.0.0+0dc1370b"});
}

/* jshint ignore:end */
//# sourceMappingURL=livarava-neuroner-mockups.map