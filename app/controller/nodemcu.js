// app/controller/home.js
const Controller = require('egg').Controller;

class NodeMcuController extends Controller {
  async index() {
    let { temperature, humidity } = this.ctx.request.body;
    temperature = parseFloat(temperature).toFixed(2);
    humidity = parseFloat(humidity).toFixed(2);
    const result = await this.ctx.service.nodemcu.submitData(temperature, humidity);
    this.ctx.body = result;
  }
}

module.exports = NodeMcuController;