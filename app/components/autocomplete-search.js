import Ember from 'ember';

export default Ember.Component.extend({
  autocompletes: [],
  actions: {
    selectResult(){

    },
    handleResults(data){
      this.set('autocompletes', data.data);
    }
  }
});
