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
  isAudio: Ember.computed('neuron.type', function () {
    return this.get('neuron.type') === 'audio';
  }),
  hasExternalURL: Ember.computed('model.type', function () {
    return this.get('model.url') || ['image', 'rss', 'video', 'link']
      .includes(this.get('model.type'));
  }),
  hasSpecificInfo: Ember.computed('model.type', function () {
    return ['rss', 'post', 'project', 'product', 'event']
      .includes(this.get('model.type'));
  })
});
