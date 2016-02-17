import Ember from 'ember';
import ShowMoreListMixin from '../mixins/show-more-list';

export default Ember.Component.extend(ShowMoreListMixin, {
  filter: '',
  items: Ember.computed('model.connections', 'filter', function () {
    return this.get('model.connections').filter((item) => item.title.toLowerCase().includes(this.get('filter').toLowerCase()));
  })
});
