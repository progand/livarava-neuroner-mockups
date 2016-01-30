import Ember from 'ember';


export default Ember.Mixin.create({
  isRSS: Ember.computed('model.type', function () {
    return this.get('model.type') === 'rss';
  })
});
