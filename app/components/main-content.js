import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';

export default Ember.Component.extend({
  isOpen: ENV.environment === 'production',
  actions: {
    onClose() {
      this.toggleProperty('isOpen');
    }
  }
});
