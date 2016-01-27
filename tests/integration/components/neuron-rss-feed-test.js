import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('neuron-rss-feed', 'Integration | Component | neuron rss feed', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{neuron-rss-feed}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#neuron-rss-feed}}
      template block text
    {{/neuron-rss-feed}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
