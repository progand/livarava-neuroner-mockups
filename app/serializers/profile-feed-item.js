import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return String(attr).toUpperCase();
  }
});
