import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: false,
  actions: {
    onClose() {
      this.toggleProperty('isOpen');
    }
  }
});
