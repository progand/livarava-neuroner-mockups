import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  host: 'https://dev.livarava.com',
  namespace: 'api/v2',
  pathForType: function (type) {
    var camelized = Ember.String.dasherize(type);
    return Ember.String.singularize(camelized);
  }
});
