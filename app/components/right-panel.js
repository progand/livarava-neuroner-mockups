import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';

export default Ember.Component.extend({
  visible: ENV.environment === 'development',
  actions: {
    toggle(){
      this.set('visible', !this.get('visible'));
    }
  }
});
