import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string'),
  image: DS.attr('string'),
  url: DS.attr('string'),

  subscriberCount: DS.attr('number'),
  views: DS.attr('number'),
  axonCount: DS.attr('number'),

  summary: DS.attr('string'),
  created: DS.attr('date'),

  comments: DS.attr({defaultValue: []}),
  commentsCount: DS.attr('number'),

  connections: DS.attr()
});
