import Ember from 'ember';
import parse from '../utils/parse-simple-neuron';

export default Ember.Component.extend({
  activeForm: '',
  actions: {
    setActiveForm(activeForm = null){
      this.set('activeForm', activeForm);
    },
    addSimpleNeuron(){
      if (!this.get('newSimpleNeuron')) {
        return;
      }
      this.set('model.connections', [this.get('newSimpleNeuron')].concat(this.get('model.connections')));
      this.set('simpleNeuronRawData', '');
    }
  },
  isSimpleFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'simple';
  }),
  newSimpleNeuron: Ember.computed('simpleNeuronRawData', function () {
    return parse(this.get('simpleNeuronRawData'));
  })
});
