import Ember from 'ember';

export default Ember.Component.extend({
  expanded: false,
  classNames: ['media'],

  actions: {
    toggleText(){
      this.toggleProperty('expanded');
    }
  },

  text: Ember.computed('item.text', function () {
    return this.get('item.text')
      .replace(/<br\s*[\/]?>/gi, '');
  })
});
