/*************************
    ┌────────────────────┐
    │ ╔═══╗[SA]201314810 │▒
    │ ╚═╦═╝  @danii_mor  │▒
    └────────────────────┘▒
**************************/

// Modules required
const { series, src, dest } = require('gulp')
const del = require('del')
const zip = require('gulp-zip')
const git = require('gulp-git')

// clean old packages
function clean () {
  return del('/target/**')
}

// zips the files and send it to target folder
function build () {
  return src(['*.js', '!gulpfile.js'])
    .pipe(zip('release.zip'))
    .pipe(dest('target'))
}

// commits the zip package made by package task
function commit () {
  return src('target/*')
    .pipe(git.add())
    .pipe(git.commit('add Package of zippped microservices'))
}

// push to release branch the commit made by commit task
function push () {
  git.push('origin', 'release', function (err) {
    if (err) throw err
    console.log(err)
  })
}

// makes a tag with the version in semver standard
function tag () {
  var version = '1.0.0'

  git.tag(version, 'Created Tag for version: ' + version, function (err) {
    if (err) {
      console.log(err)
    }

    git.push('origin', 'master', { args: '--tags' }, function (err) {
      if (err) throw err
      console.log(err)
    })
  })
}

exports.default = series(clean, build, commit, push, tag)
