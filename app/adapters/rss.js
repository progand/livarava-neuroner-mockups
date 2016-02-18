import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
   host: 'https://dev.livarava.com',
   pathForType: function(type) {
    return Ember.String.singularize('neuroner');
  }
});
