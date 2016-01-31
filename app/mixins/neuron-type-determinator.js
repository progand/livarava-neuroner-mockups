import Ember from 'ember';


export default Ember.Mixin.create({
  isRSS: Ember.computed('model.type', function () {
    return this.get('model.type') === 'rss';
  }),
  isImage: Ember.computed('model.type', function () {
    return this.get('model.type') === 'image';
  }),
  hasExternalURL: Ember.computed('model.type', function () {
    return ['image', 'rss', 'video', 'url']
      .includes(this.get('model.type'));
  }),
  hasSpecificInfo: Ember.computed('model.type', function () {
    return ['rss']
      .includes(this.get('model.type'));
  })
});
