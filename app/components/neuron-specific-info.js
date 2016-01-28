import Ember from 'ember';

export default Ember.Component.extend({
  isRSS: Ember.computed('model.url', function () {
    return /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(this.get('model.url'));
  })
});
