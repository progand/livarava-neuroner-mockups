import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';
import parse from '../utils/parse-simple-neuron';

export default Ember.Component.extend({
  activeForm: ENV.environment === 'development' ? 'rss' : '',
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
    },
    addRSSNeuron(){
      if (!this.get('newRSSNeuron')) {
        return;
      }
      this.set('model.connections', [this.get('newRSSNeuron')].concat(this.get('model.connections')));
      this.set('rssNeuronRawData', '');
      //this.actions.setActiveForm(null);
    }
  },
  isSimpleFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'simple';
  }),
  isRSSFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'rss';
  }),
  newSimpleNeuron: Ember.computed('simpleNeuronRawData', function () {
    return parse(this.get('simpleNeuronRawData'));
  }),
  newRSSNeuron: Ember.computed('rssNeuronRawData', function () {
    return parse(this.get('rssNeuronRawData'), {type: 'rss'});
  })
});
