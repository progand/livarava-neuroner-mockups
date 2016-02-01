import Ember from 'ember';
import parse from '../utils/parse-simple-neuron';

export default Ember.Component.extend({
  activeForm: 'simple',
  actions: {
    setActiveForm(activeForm = null){
      this.set('activeForm', activeForm);
    },
    addSimpleNeuron(){
      let data = this.get('simpleNeuronRawData');

      if (!data) {
        return;
      }

      console.log(this.get('simpleNeuronRawData'));
    }
  },
  isSimpleFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'simple';
  }),
  newSimpleNeuron: Ember.computed('simpleNeuronRawData', function () {
    return parse(this.get('simpleNeuronRawData'));
  })
});
