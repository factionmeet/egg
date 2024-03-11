// app/router.js
module.exports = app => {
    const { router, controller, io } = app;
    //router.get('/', controller.home.index);
    //router.get('/news', middlewares.robot(app.config.robot), controller.news.List);
    router.post('/', controller.nodemcu.infoCollection);
    router.get('/', controller.nodemcu.getLastData);
    io.of('/').route('chat', io.controller.test.ping)
    io.of('/').route('lastData', io.controller.test.getLastData)
    //io.of('/').route('send', io.controller.test.getLastData)
};