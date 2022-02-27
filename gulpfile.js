// подключаем основной модуль
import gulp from 'gulp';

// импорт путей
import { path } from './gulp/config/path.js'; /* деструктуризация */
import { plugins } from './gulp/config/plugins.js';

// передаём значение в глобальную переменную
global.app = {
    isBuild: process.argv.includes('--build'), /* режим продакшн */
    isDev: !process.argv.includes('--build'), /* режим разработчика */
    path,
    gulp,
    plugins,
}

// импорт задач
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { reset } from './gulp/tasks/reset.js';
import { style } from './gulp/tasks/style.js'
import { images } from './gulp/tasks/images.js';
import { js } from './gulp/tasks/js.js';
import {otfToTtf, ttfToWoff} from './gulp/tasks/fonts.js';

// наблюдатель за измененями в файлах
function watcher() {
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.style, style)
    gulp.watch(path.watch.images, images)
    gulp.watch(path.watch.js, js)
}

const fonts = gulp.series(otfToTtf, ttfToWoff)

// основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(html, style, images, js)) /* parallel - запускает задачи одновременно все,
series - запускает задачи поочерёдно
*/


// построение сценариев веполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))

const build = gulp.series(reset, mainTasks)

// экспорт сценариев
export {dev, build}


// выполнение сценария по умолчанию
gulp.task('default', dev)