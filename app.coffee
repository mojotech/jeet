axis         = require 'axis-css'
autoprefixer = require 'autoprefixer-stylus'
rupture      = require 'rupture'

module.exports =
  ignores: ['README.md', '**/layout.*', '**/_*', '.gitignore']

  stylus:
    use: [axis(), autoprefixer(), rupture()]
