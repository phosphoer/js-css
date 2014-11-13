var vars = require('./advanced-variables');
var themeColors = vars.themeColors('dark');

var buttonStyles =
{
  'color': themeColors.baseHigh,
  'background-color': themeColors.baseLow,
  'border-color': 'transparent'
};

var rules = {};
rules[vars.buttonSelector] = buttonStyles;

module.exports =
{
  includes: [require('./advanced-styles')],
  rules: rules
};

/*


&:hover {
    border-color: @baseMediumMid;
}

&:active {
    background-color: @baseMediumMid;
}

&:disabled {
    color: @baseLow;
    background-color: @baseLow;
    border-color: transparent;
}
*/