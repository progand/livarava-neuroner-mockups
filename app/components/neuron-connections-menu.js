import Ember from 'ember';

export default Ember.Component.extend({
  activeForm: 'simple',
  actions: {
    setActiveForm(activeForm = null){
      this.set('activeForm', activeForm);
    },
    addSimpleNeuron(){
      console.log(this.get('simpleNeuronRawData'));
    }
  },
  isSimpleFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'simple';
  })
});
