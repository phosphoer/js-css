module.exports =
{
  buttonSelector: 'button, input[type=button], input[type=reset], input[type=submit], button[type=submit]',
  themeColors: function(theme)
  {
    var colors = {};

    if (theme === 'light')
    {
      colors.altHigh = '#fff';
      colors.baseHigh = '#000';
    }
    else if (theme === 'dark')
    {
      colors.altHigh = '#000';
      colors.baseHigh = '#fff';
    }

    colors.baseMediumHigh = '#ddd';
    colors.baseMediumMid = '#aaa';
    colors.baseMid = '#888';
    colors.baseLow = '#444';

    colors.accentColor = '#55d';

    return colors;
  }
};
