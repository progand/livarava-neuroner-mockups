import Ember from 'ember';

export function truncate([text=''], {length=100, omission='...', separator=' '}) {
  return _.truncate(text, {
    length: length,
    omission: omission,
    separator: separator
  });
}

export default Ember.Helper.helper(truncate);
