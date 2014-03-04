var should = require('should'),
    stylus = require('stylus'),
    fs = require('fs');

var stylusMatchTest = function() {
  var files = fs.readdirSync(__dirname + '/fixtures/stylus/styl/');

  files.forEach(function(file) {
    var fileName = file.replace(/.{5}$/, '');

    describe(fileName + ' method', function() {
      it('should match', function(done) {
        var str = fs.readFileSync(__dirname + '/fixtures/stylus/styl/' + fileName + '.styl', { encoding: 'utf8' });
        stylus(str)
          .render(function(err, result) {
            var expected = fs.readFileSync(__dirname + '/fixtures/stylus/css/' + fileName + '.css', { encoding: 'utf8' });

            done(err, expected.should.be.exactly(result));
          });
      });
    });

  });

}

stylusMatchTest();
