import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
   pathForType: function() {
    return 'neuroner';
  },
  buildURL: function (type, id, record) {
    //call the default buildURL and then append a slash
    return this._super(type, id, record) + '/';
  }
});
