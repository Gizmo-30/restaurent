import plumber from 'gulp-plumber'; /* обработка ошибок */
import notify from 'gulp-notify'; /* Сообщения (подсказки) */
import browsersync from 'browser-sync'; /* этот плагин для открытия браузера и перезагрузки */
import newer from 'gulp-newer'; /* проверка обновлений. Проверяем есть ли у нас такая картинка */


// экспортируемый объект 
export const plugins = {
    plumber,
    notify,
    browsersync,
    newer
}