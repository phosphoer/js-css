'use strict';

var chai = require('chai');
var jscss = require('../js-css');
var testModule = require('./lib/basic-include');
var expect = chai.expect;

describe('jscss.build', function()
{
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

  it('should build js modules with includes', function()
  {
    expect(css).to.equal(expectedCSS);
  });
});
