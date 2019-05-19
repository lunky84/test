
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
 
function style() {
	return gulp.src('./app/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./app/css'))
	.pipe(browserSync.stream());
}

function transpile() {
  return gulp.src("./src/content.js")
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(gulp.dest("./app/js/lib"));
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
	gulp.watch('./app/sass/**/*.scss', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
	gulp.watch('./src/**/*.js', transpile);
}

exports.style = style;
exports.transpile = transpile;
exports.watch = watch;
