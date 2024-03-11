// {app_root}/app/io/middleware/packet.js
module.exports = app => {
    return async (ctx, next) => {
        ctx.socket.emit('res', '收到的数据包');
        console.log('packet:', ctx.packet);
        await next();
    };
};