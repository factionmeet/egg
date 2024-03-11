// app/service/news.js
const Service = require('egg').Service;
class NodeMcuService extends Service {
  async submitData(temperature, humidity) {
    const app = this.app;
    const res = await app.model.Nodemcu.create({
        temperature,
        humidity
    })
    return res.dataValues;
  }
}

module.exports = NodeMcuService;