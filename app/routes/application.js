import Ember from 'ember';
import LoadingSliderMixin from '../mixins/loading-slider';

export default Ember.Route.extend(LoadingSliderMixin, {
  title: function (tokens) {
    tokens = Ember.makeArray(tokens);
    tokens.push('LivaRava');
    return tokens.join(' - ');
  }
});
