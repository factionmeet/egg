// app/controller/home.js
const Controller = require('egg').Controller;

class NodeMcuController extends Controller {
  async infoCollection() {
    let { temperature, humidity } = this.ctx.request.body;
    temperature = parseFloat(temperature).toFixed(2);
    humidity = parseFloat(humidity).toFixed(2);
    const result = await this.ctx.service.nodemcu.submitData(temperature, humidity);
    console.log('这是发送开始');
    const io = this.app.io.of('/');
    io.emit('send', result);
    console.log('这是发送完成');
    // this.ctx.socket.emit('send', result);
    this.ctx.body = result;
  }
  async getLastData() {
    const ctx = this.ctx
    const result = await ctx.service.nodemcu.getLastData();
    ctx.body = result;
  }
}

module.exports = NodeMcuController;