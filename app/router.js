// app/router.js
module.exports = app => {
    const { router, controller, io } = app;
    router.get('/', controller.home.index);
    //router.get('/news', middlewares.robot(app.config.robot), controller.news.List);
    router.post('/nodemcu', controller.nodemcu.index);
    io.of('/').route('ping', io.controller.test.ping)
};