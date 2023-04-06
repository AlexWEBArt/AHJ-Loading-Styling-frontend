[![Build status](https://ci.appveyor.com/api/projects/status/e28hdsp6575ac6lf?svg=true)](https://ci.appveyor.com/project/AlexWEBArt/ahj-loading-styling-frontend)
https://github.com/AlexWEBArt/AHJ-Loading-Styling-frontend.git/

### Loading Styling

#### Легенда

Сейчас модно показывать интерфейсы загрузки вроде следующего:

![](./src/img/loading.png)

#### Описание

Реализуйте подобный интерфейс, закешировав статические ресурсы и показывая данный внешний вид до момента загрузки данных.

Обратите внимание, даже если у пользователя нет подключения, страница всё равно должна отображаться, но в режиме "загрузки" и после неудачной попытки соединения переходить в режим:

![](./src/img/loading-2.png)

Для эмуляции задержки можете самостоятельно написать middleware для koa, или посмотреть на существующие вроде [koa-slow](https://github.com/bahmutov/koa-slow)

Напоминаем, что для кэширования вы можете воспользоваться плагином Workbox.