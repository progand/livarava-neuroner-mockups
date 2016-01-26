import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      name: 'Example RSS Neuron',
      description: '',
      url: 'http://blog.aweber.com/feed',
      stats: {
        users: 15,
        axons: 35,
        views: 255
      }
    }
  }
});
