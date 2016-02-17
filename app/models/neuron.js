import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string'),
  image: DS.attr('string'),
  linkUrl: DS.attr('string'),
  created: DS.attr('date'),
  connections: DS.attr(),
  comments: DS.attr({defaultValue: []}),
  views: DS.attr('number'),
  axonCount: DS.attr('number'),
  subscriberCount: DS.attr('number')
});
