import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Home',

  model(){
    return this.store.findAll('feed');
  }
});
