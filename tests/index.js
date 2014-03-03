var should = require('should'),
    stylus = require('stylus'),
    fs = require('fs');

describe('edit method', function() {
  it('should assign translucent bg color to all elements', function(done) {
    var str = fs.readFileSync(__dirname + '/fixtures/edit.styl', { encoding: 'utf8' });
    stylus(str)
      .import('stylus/jeet')
      .render(function(err, result) {
        var expected = fs.readFileSync(__dirname + '/fixtures/edit.css', { encoding: 'utf8' });

        done(err, expected.should.be.exactly(result));
      });
  });
});
