import Ember from 'ember';

export default Ember.Component.extend({
  showingConnections: false,
  actions: {
    showInfo(){
      this.set('showingConnections', false);
    },
    showConnections(){
      this.set('showingConnections', true);
    }
  }
});
