import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v2',
  pathForType: function (type) {
    var camelized = Ember.String.dasherize(type);
    return Ember.String.singularize(camelized);
  },
  buildURL: function (type, id, record) {
    //call the default buildURL and then append a slash
    return this._super(type, id, record) + '/';
  }
});
