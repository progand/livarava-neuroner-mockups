import Ember from 'ember';


export default Ember.Mixin.create({
  isRSS: Ember.computed('model.type', function () {
    return this.get('model.type') === 'rss';
  }),
  isImage: Ember.computed('model.type', function () {
    return this.get('model.type') === 'image';
  }),
  isVideo: Ember.computed('model.type', function () {
    return this.get('model.type') === 'video';
  }),
  isPost: Ember.computed('model.type', function () {
    return this.get('model.type') === 'post';
  }),
  hasExternalURL: Ember.computed('model.type', function () {
    return ['image', 'rss', 'video', 'link']
      .includes(this.get('model.type'));
  }),
  hasSpecificInfo: Ember.computed('model.type', function () {
    return ['rss', 'post']
      .includes(this.get('model.type'));
  })
});
