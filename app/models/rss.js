import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  text: DS.attr('string'),
  guid: DS.attr('string'),
  pub_date: DS.attr('date')
});
