import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  text: DS.attr('string'),
  guid: DS.attr('string'),
  pubDate: DS.attr('date'),
  image: DS.attr('string', {defaultValue: 'image: "https://www.livarava.com/static/livarava/img/neurons/link.png'}),

  url: Ember.computed.oneWay('guid'),
  date: Ember.computed.oneWay('pub_date')
});
