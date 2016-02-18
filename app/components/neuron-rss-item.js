import Ember from 'ember';

export default Ember.Component.extend({
  expanded: false,
  classNames: ['media'],

  actions: {
    toggleText(){
      this.toggleProperty('expanded');
    }
  }
});
