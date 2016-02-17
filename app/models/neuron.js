import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string'),

  subscriberCount: DS.attr('number'),
  views: DS.attr('number'),
  axonCount: DS.attr('number'),

  summary: DS.attr('string'),

  image: DS.attr('string'),
  linkUrl: DS.attr('string'),
  created: DS.attr('date'),
  connections: DS.attr(),
  comments: DS.attr({defaultValue: []}),

  link_url: DS.attr('string'),
  image_url: DS.attr('string'),
  video_url: DS.attr('string'),
  project_url: DS.attr('string'),
  product_url: DS.attr('string'),
  event_url: DS.attr('string'),

  url: Ember.computed('type', function () {
    return this.get(`${this.get('type')}_url`);
  }),
  image: Ember.computed('image_url', function () {
    return this.get('image_url');
  })
});
