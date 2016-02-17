import Ember from 'ember';
import ShowMoreListMixin from '../mixins/show-more-list';

export default Ember.Component.extend(ShowMoreListMixin, {
  filter: '',
  items: Ember.computed('model.connections', 'filter', function () {
    return this.get('model.connections').filter((item) => {
      return item && item.title && _.includes(item.title, this.get('filter'));
    });
  })
});
