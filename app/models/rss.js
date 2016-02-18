import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  text: DS.attr('string'),
  guid: DS.attr('string'),
  pubDate: DS.attr('string'),
  image: DS.attr('string'),

  url: Ember.computed.oneWay('guid'),
  date: Ember.computed('pub_date', function(){
    return moment(this.get('pubDate')).toDate();
  })
});
