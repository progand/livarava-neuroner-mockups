import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      name: 'Example RSS Neuron',
      description: 'This is description of the neuron. You can edit it as well as URL above.',
      url: 'http://blog.aweber.com/feed',
      stats: {
        users: 15,
        axons: 35,
        views: 255
      }
    }
  }
});
