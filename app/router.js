import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('search', {path: '/search/:neuron_id'});
  this.route('profile-feed');
  this.route('neuron', {path: '/neuron/:neuron_id'});
  this.route('search-examples');
});

export default Router;
