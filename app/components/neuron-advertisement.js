import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: true,
  actions: {
    onClose() {
      this.toggleProperty('isOpen');
    }
  }
});
