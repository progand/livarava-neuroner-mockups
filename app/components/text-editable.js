import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,
  didRender() {
    this.$('textarea, input').focus();
  },
  actions: {
    edit() {
      this.set('editing', true);
    },
    save() {
      this.set('editing', false);
    }
  }
});
