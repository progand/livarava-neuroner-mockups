import Ember from 'ember';
import neurons from '../fixtures/neurons';

export default Ember.Route.extend({
  model(params) {
    let originalNeuron = _.find(neurons, {id: Number(params.neuron_id)}),
      neuron = _.extend({}, originalNeuron, {
        connections: _.reject(neurons, {id: Number(params.neuron_id)})
      });

    if (neuron.type === 'rss' && neuron.loadRSS) {
      return Ember.RSVP.hash(_.extend(neuron,{
        feed: this.store.findAll('rss')
      }));
    } else {
      return neuron;
    }

  }
});
