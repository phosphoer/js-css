var vars = require('./basic-variables');

var rules =
{
  'div':
  {
    'color': vars.themeColor,
    'background-color': '#000'
  }
};

module.exports =
{
  includes: [require('./basic-include-file')],
  rules: rules
};