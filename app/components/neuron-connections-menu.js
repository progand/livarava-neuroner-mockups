import Ember from 'ember';
import ENV from 'livarava-neuroner-mockups/config/environment';
import parse from '../utils/parse-simple-neuron';

export default Ember.Component.extend({
  activeForm: ENV.environment === 'development' ? '' : '',
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
      this.actions.setActiveForm.apply(this);
    },
    onImageNeuronRawDataLoad(file){
      this.set('imageNeuronRawData', file.data);
    },
    addImageNeuron(){
      if (!this.get('newImageNeuron')) {
        return;
      }
      this.set('model.connections', [this.get('newImageNeuron')].concat(this.get('model.connections')));
      this.set('imageNeuronRawData', '');
      this.actions.setActiveForm.apply(this);
    },
    onAudioNeuronRawDataLoad(file){
      this.set('audioNeuronRawData', file.data);
    },
    addAudioNeuron(){
      if (!this.get('newAudioNeuron')) {
        return;
      }
      this.set('model.connections', [this.get('newAudioNeuron')].concat(this.get('model.connections')));
      this.set('audioNeuronRawData', '');
      this.actions.setActiveForm.apply(this);
    },
    addPostNeuron() {
      if (!this.get('newPostNeuron')) {
        return;
      }
      this.set('model.connections', [this.get('newPostNeuron')].concat(this.get('model.connections')));
      this.set('postTitle', '');
      this.set('postImage', '');
      this.set('postText', '');
      this.actions.setActiveForm.apply(this);
    }
  },
  isSimpleFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'simple';
  }),
  isImageFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'image';
  }),
  isAudioFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'audio';
  }),
  isPostFormActive: Ember.computed('activeForm', function () {
    return this.get('activeForm') === 'post';
  }),
  newSimpleNeuron: Ember.computed('simpleNeuronRawData', function () {
    return parse(this.get('simpleNeuronRawData'), {title: this.get('model.title')});
  }),
  newImageNeuron: Ember.computed('imageNeuronRawData', function () {
    return parse(this.get('imageNeuronRawData'), {title: this.get('model.title')});
  }),
  newAudioNeuron: Ember.computed('audioNeuronRawData', function () {
    return parse(this.get('audioNeuronRawData'), {title: this.get('model.title')});
  }),
  newPostNeuron: Ember.computed('postTitle', 'postImage', 'postText', function () {
    let postData = {
      title: this.get('postTitle'),
      image: this.get('postImage'),
      text: this.get('postText')
    };
    if (postData.title !== undefined && postData.image !== undefined && postData.text !== undefined) {
      return parse(postData, {title: this.get('model.title')});
    }
  })
});
