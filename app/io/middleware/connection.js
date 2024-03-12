//Connection

//每个客户端连接或退出时起作用。因此，通常在这一步进行授权认证，并对认证失败的客户端进行处理。
module.exports = app => {
    return async (ctx, next) => {
        ctx.socket.emit('connects', '连接成功');
        await next();
        // execute when disconnect.
        ctx.socket.emit('disconnects', '连接断开!');
        console.log('断开了!');
    };
};