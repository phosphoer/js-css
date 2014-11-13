var mixins = require('./advanced-mixins');
var vars = require('./advanced-variables');

var buttonStyles =
{
  'border-style': 'solid',
  'margin': '0px',
  'min-height': '32px',
  'min-width': '120px',
  'padding': '4px 8px',
  'border-width': '2px',
  'background-clip': 'border-box',
};

mixins.typeBody(buttonStyles);

var rules = {};
rules[vars.buttonSelector] = buttonStyles;

module.exports =
{
  includes: [require('./advanced-colors')],
  rules: rules
};