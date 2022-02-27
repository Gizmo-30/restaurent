
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import autoPrefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';/* Сжатие файла css */

const sass = gulpSass(dartSass);

export const style = () => {
    return app.gulp.src(app.path.src.style, {sourcemaps: true}) /*sourcemaps - нужен чтобы видеть ошибки. Карты исходников*/
    // .pipe(app.plugins.plumber(app.plugins.notify({
    //     title: "СSS",
    //     message: "Error: <%= error.message %>",
    // })))
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(autoPrefixer({
        grid: true,
        overrideBrowserList: ["last 3 version"], /* поддержка версий браузера. последнии 3 версии */
        cascade: true,
    }))
    .pipe(cleanCss())
    .pipe(rename({
        extname: ".min.css",
    }))
    .pipe(app.gulp.dest(app.path.build.style))
    .pipe(app.plugins.browsersync.stream())
}
