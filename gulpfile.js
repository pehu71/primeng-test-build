var gulp = require('gulp');
var del = require('del');
var replace = require('gulp-replace');

gulp.task('import-for-compile', function (){

    del.sync(['app/**', '!app']);
    del.sync(['aot/**', '!aot']);
    del.sync(['dist/**', '!dist']);

    gulp.src([
        '../primeng-test/app/tpl/*.html'
    ])
        .pipe(gulp.dest('app/tpl'));

    gulp.src([
        '../primeng-test/app/*.ts',
        '!../primeng-test/app/boot.ts',
        '../primeng-test/script-aot-src/*.ts'
    ])
        // .pipe(replace(/app\/tpl\//, 'tpl/'))
        .pipe(gulp.dest('app'));

/*    gulp.src([
        '../pehuinfo2/src/webserver/wwwroot/app/classes/!*.ts'
    ])
        .pipe(replace(/app\/tpl\//, '../tpl/'))
        .pipe(gulp.dest('app/classes'));

    gulp.src([
        '../pehuinfo2/src/webserver/wwwroot/app/directives/!*.ts'
    ])
        .pipe(gulp.dest('app/directives'));*/
});

gulp.task('default', ['import-for-compile']);