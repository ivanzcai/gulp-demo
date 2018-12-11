const { src, dest } = require('gulp');

exports.default = function() {
    return src('src/*.js')
      .pipe(dest('deploy/'));
  }

// gulp.task('test-task', function(){
//     console.log('success!');
// });
