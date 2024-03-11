// {app_root}/app/io/controller/default.js
'use strict';

const Controller = require('egg').Controller;

class Test extends Controller {
  // 客户端连接时触发
  async ping() {
    const message = this.ctx.args[0];
    console.log("message", message)
    //await this.ctx.socket.emit('res', `${message}`);
  }
  async disconnect() {
    const message = this.ctx.args[0];
    console.log(message);
  }
}

module.exports = Test;