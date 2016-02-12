import Ember from 'ember';
import parse from '../utils/parse-simple-neuron';

export default Ember.Component.extend({
  actions: {
    addCommentNeuron() {
      if (!this.get('newCommentsNeuron')) {
        return;
      }
      this.set('model.comments', [this.get('newCommentsNeuron')].concat(this.get('model.comments')));
      this.set('commentsData', '');
    }
  },
  newCommentsNeuron: Ember.computed('commentsData', function () {
    return parse(this.get('commentsData'), {title: this.get('model.title'), type: 'comments'});
  })
});
