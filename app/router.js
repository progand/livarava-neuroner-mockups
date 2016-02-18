import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('search', {path: '/search/:neuron_id'});
  this.route('neuron', {path: '/neuron/:neuron_id'});
  this.route('search-examples');
  this.route('autocomplete');
  this.route('new-neuron');
});

export default Router;
