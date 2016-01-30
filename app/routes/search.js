import Ember from 'ember';
import neurons from '../fixtures/neurons';

export default Ember.Route.extend({
  model(params) {
    return _.extend(_.find(neurons, {id: Number(params.neuron_id)}), {
      connections: _.reject(neurons, {id: Number(params.neuron_id)})
    });
  }
});
