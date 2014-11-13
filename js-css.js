var api = {};

api.build = function(mod)
{
  var css = [];
  if (mod.includes)
  {
    for (var i = 0; i < mod.includes.length; ++i)
      css.push(api.build(mod.includes[i]));
  }

  if (mod.rules)
    css.push(api.toCSS(mod.rules));

  if (!mod.rules && !mod.includes)
    css.push(api.toCSS(mod));

  return css.join('\n');
};

api.toCSS = function(ruleObj)
{
  var outputText = '';
  for (var selector in ruleObj)
  {
    var styleText = '';
    var styles = ruleObj[selector];
    for (var property in styles)
    {
      if (!styles.hasOwnProperty(property))
        continue;
      var value = styles[property];
      styleText += '  ' + property + ': ' + value + ';\n';
    }

    outputText += selector + ' {\n' + styleText + '}\n';
  }

  return outputText;
};

module.exports = api;