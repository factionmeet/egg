// {app_root}/app/io/controller/default.js
'use strict';

const Controller = require('egg').Controller;

class Test extends Controller {
  // 客户端连接时触发
  async ping() {
    this.ctx.socket.on('send', (data) =>{
      console.log(data);
    })
    const message = this.ctx.args[0];
    console.log("message", message)
    this.ctx.socket.emit('res', '你好');
  }
  async getLastData(){
    console.log("实时数据函数")
    //this.ctx.socket.emit('res', '我发送了实时数据');
    const result = await this.ctx.service.nodemcu.getLastData();
    this.ctx.socket.emit('res', JSON.stringify(result));
  }
  async disconnect() {
    const message = this.ctx.args[0];
    console.log(message);
  }
}

module.exports = Test;