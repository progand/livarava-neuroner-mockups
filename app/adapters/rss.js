import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
   pathForType: function() {
    return 'neuroner';
  }
});
