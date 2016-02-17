import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  type: DS.attr('string'),

  subscriberCount: DS.attr('number'),
  views: DS.attr('number'),
  axonCount: DS.attr('number'),

  summary: DS.attr('string'),
  created: DS.attr('date'),

  comments: DS.attr({defaultValue: []}),
  commentsCount: DS.attr('number'),

  connections: DS.attr(),

  linkUrl: DS.attr('string'),
  imageUrl: DS.attr('string'),
  videoUrl: DS.attr('string'),
  projectUrl: DS.attr('string'),
  productUrl: DS.attr('string'),
  eventUrl: DS.attr('string'),
  mainImageUrl: DS.attr('string'),

  url: Ember.computed('type', function () {
    return this.get(`${this.get('type')}Url`);
  }),
  image: Ember.computed('imageUrl', 'mainImageUrl', function () {
    return this.get('imageUrl') || this.get('mainImageUrl');
  })
});
