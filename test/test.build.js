'use strict';

var chai = require('chai');
var jscss = require('../js-css');
var expect = chai.expect;

describe('jscss.build', function()
{

  it('should build js modules with includes', function()
  {
    var testModule = require('./lib/basic-include');
    var css = jscss.build(testModule);
    var expectedCSS =
    [
      'span {',
      '  color: red;',
      '  background-color: #000;',
      '}',
      '',
      'div {',
      '  color: red;',
      '  background-color: #000;',
      '}',
      ''
    ].join('\n');

    expect(css).to.equal(expectedCSS);
  });

  it('should work with more complicated modules', function()
  {
    var testModule = require('./lib/advanced-styles');
    var css = jscss.build(testModule);
    var expectedCSS =
    [
      '',
      'button, input[type=button], input[type=reset], input[type=submit], button[type=submit] {',
      '  color: #fff;',
      '  background-color: #444;',
      '  border-color: transparent;',
      '}',
      '',
      'button, input[type=button], input[type=reset], input[type=submit], button[type=submit] {',
      '  border-style: solid;',
      '  margin: 0px;',
      '  min-height: 32px;',
      '  min-width: 120px;',
      '  padding: 4px 8px;',
      '  border-width: 2px;',
      '  background-clip: border-box;',
      '  font-size: 15px;',
      '  font-weight: 400;',
      '  line-height: 1.333;',
      '}',
      ''
    ].join('\n');

    expect(css).to.equal(expectedCSS);
  });
});
