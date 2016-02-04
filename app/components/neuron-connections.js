import Ember from 'ember';
import ShowMoreListMixin from '../mixins/show-more-list';

export default Ember.Component.extend(ShowMoreListMixin, {
  items: Ember.computed('model.connections', function () {
    return this.get('model.connections');
  })
});
