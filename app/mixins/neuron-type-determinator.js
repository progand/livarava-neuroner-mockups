import Ember from 'ember';


export default Ember.Mixin.create({
  isRSS: Ember.computed('model.type', function () {
    return this.get('model.type') === 'rss';
  }),
  hasExternalURL: Ember.computed('model.type', function () {
    return ['image', 'rss', 'video', 'url']
      .includes(this.get('model.type'));
  }),
  isImage: Ember.computed('model.type', function () {
    return this.get('model.type') === 'image';
  })
});
