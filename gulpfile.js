/**
 * Created by Administrator on 2017/5/19.
 */
    //重命名
// const gulp =require('gulp');
// rename =require('gulp-rename');
// uglify = require('gulp-uglify');
//
// gulp.task('rename',()=>{
//     gulp.src('src/1.js')
//         .pipe(uglify())
//         .pipe(rename('1.min.js'))
//         .pipe(gulp.dest('js'));
// })
    //js文件压缩
// const gulp =require('gulp');
// uglify =require('gulp-uglify');
//
// gulp.task('minify-js',()=>{
//     gulp.src('src/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'))
// })
    //css文件压缩
// const gulp = require('gulp');
// minifyCss = require('gulp-minify-css');
// gulp.task('minify-css',()=>{
//     gulp.src('src/*.css')
//         .pipe(minifyCss())
//         .pipe(gulp.dest('dist/css'));
// })

//html文件压缩
// const gulp =require('gulp');
// minifyHtml = require('gulp-minify-html');
//
// gulp.task('minify-html',()=>{
//     gulp.src('src/*.html')
//         .pipe(minifyHtml())
//         .pipe(gulp.dest('dist/html'))
// })

//js代码检查
// const gulp =require('gulp');
// jshint=require('gulp-jshint');
// gulp.task('jsLint',()=>{
//     gulp.src('src/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter());
// })

//文件合并
// const gulp =require('gulp');
// concat =require('gulp-concat');
// gulp.task('concat',()=>{
//     gulp.src('src/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('dist/js'));
// })

// 图片压缩
// const gulp = require('gulp');
// const imagemin =require('gulp-imagemin');
// const pngquant = require('imagemin-pngquant');
// gulp.task("default",()=>{
//     return gulp.src('src/images/*')
//         .pipe(imagemin({
//             progressive:true,
//             use:[pngquant()]
//         }))
//         .pipe(gulp.dest('dist'));
// })

//自动刷新
// const gulp =require('gulp');
// less = require('gulp-less');
// livereload =require('gulp-livereload');
// gulp.task('less',()=> {
//     gulp.src('less/*.less')
//         .pipe(less())
//         .pipe(gulp.dest('css'))
//         .pipe(livereload());
// })
// gulp.task('watch',()=>{
//     livereload.listen();
//     gulp.watch('less/*.less',['less']);
// })