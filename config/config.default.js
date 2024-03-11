// config/config.default.js
'use strict';
exports.keys = 'jielong.lv';
exports.middleware = [
    'robot'
];
// robot's configurations
exports.robot = {
    ua: [
        /Baiduspider/i
    ]
};
//crsf拦截配置
exports.security = {
    csrf: {
        enable: false,
        ignoreJSON: true,
        igonre: ctx => {
        }
    },
    domainWhiteList: ['*'], // 配置白名单
};
//sequelize的数据库参数配置
exports.sequelize = {
    dialect: 'mysql',
    username: "root",
    password: "0510",
    host: '127.0.0.1',
    port: 3306,
    database: 'nodemcu'
};
//socket.io命名空间配置
exports.io = {
    init: {}, // 传递给 engine.io
    //命名空间
    namespace: {
        '/': {
            connectionMiddleware: ['connection'],
            packetMiddleware: [],
        },
        '/example': {
            connectionMiddleware: [],
            packetMiddleware: [],
        }
    },
    redis: {
        host: "127.0.0.1" ,
        port: 6379,
        auth_pass: "0510",
        db: 0,
    },
};
// 配置允许跨域
exports.cors = {
    // 任何地址都可以访问
    origin:"*",
    // 指定地址才可以访问
    // origin: 'http://localhost:8080',
    allowMethods: 'GET,PUT,POST,DELETE',
    // cookie跨域配置
    credentials: true
  };
