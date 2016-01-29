import Ember from 'ember';

export default Ember.Component.extend({
  visible: false,
  actions: {
    toggle(){
      this.set('visible', !this.get('visible'));
    }
  }
});
