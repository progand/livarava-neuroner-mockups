import Ember from 'ember';

export default Ember.Component.extend({
  expanded: false,
  filter: '',
  classNames: ['media'],

  actions: {
    toggleText(){
      this.toggleProperty('expanded');
    }
  },

  title: Ember.computed('filter', function () {
    let regexp = new RegExp(this.get('filter'), 'i');

    return this.get('item.title')
      .replace(regexp, `<span class="bg-warning">$&</span>`);
  }),
  text: Ember.computed('filter', function () {
    let regexp = new RegExp(this.get('filter'), 'i');

    return this.get('item.text')
      .replace(regexp, `<span class="bg-warning">$&</span>`);
  })
});
