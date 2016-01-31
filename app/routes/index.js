import Ember from 'ember';
import neurons from '../fixtures/neurons';

export default Ember.Route.extend({
  model(){
    return {connections: _.orderBy(neurons, 'title')};
  }
});
