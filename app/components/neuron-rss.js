import Ember from 'ember';
import ShowMoreListMixin from '../mixins/show-more-list';

export default Ember.Component.extend(ShowMoreListMixin, {
  filter: '',

  actions: {
    onNeuronIt(item){
      this.set('model.feed', _(this.get('model.feed'))
        .without(item)
        .value());
    }
  },

  items: Ember.computed('filter', function () {
    return this.get('model.feed').filter(item => {
      return item.title.toLowerCase().includes(this.get('filter').toLowerCase()) ||
        item.text.toLowerCase().includes(this.get('filter').toLowerCase());
    }).map(item => {
      return _.assign({}, item, {
        title: item.title.replace(this.get('filter'), `<strong>${this.get('filter')}</strong>`),
        text: item.text.replace(this.get('filter'), `<strong>${this.get('filter')}</strong>`)
      });
    });
  })
});
