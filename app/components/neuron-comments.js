import Ember from 'ember';

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
    return {
      created: new Date(),
      text: this.get('commentsData'),
      image: 'https://www.livarava.com/static/livarava/img/neurons/person.png'
    };
  })
});
