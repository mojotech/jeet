var stylus  = require('stylus'),
    fs      = require('fs'),
    should  = require('should');

function compare(name, done) {
  var str = fs.readFileSync(__dirname + '/fixtures/stylus/styl/' + name + '.styl', { encoding: 'utf8' });
  stylus(str)
    .import('stylus/jeet')
    .render(function(err, result) {
      fs.readFile(__dirname + '/fixtures/stylus/css/' + name + '.css', { encoding: 'utf8' }, function(e, expected) {
        done(err, expected.should.be.exactly(result));
      });
    });
}

// Stylus Comparison Tests
describe('compiling method', function() {
  it('should apply a translucent, light-gray background color to all elements', function(done) {
    compare('edit', done);
  });
  it('should center an element horizontally', function(done) {
    compare('center', done);
  });
  it('should create an aside that spans 1/3 width with a margin-right gutter and an article that spans 2/3', function(done) {
    compare('column', done);
  });
  it('should create 4 equally sized blocks; the 5th block should drop to the next row', function(done) {
    compare('column-cycle', done);
  });
  it('should create 4 equally sized (25%) blocks with no gutter between them', function(done) {
    compare('span', done);
  });
  it('should create 3 equally sized (25%) blocks with no gutter between them and a 25% offset applied to the second element', function(done) {
    compare('span-offset', done);
  });
  it('should create an aside that spans 1/3 and is shifted to the right 2/3, and create an article that spans 2/3 and is shifted to the left -1/3', function(done) {
    compare('span-shift', done);
  });
});
