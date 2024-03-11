// app/service/news.js
const Service = require('egg').Service;
const moment = require('moment');
class NodeMcuService extends Service {
  async submitData(temperature, humidity) {
    const app = this.app;
    const res = await app.model.Nodemcu.create({
        temperature,
        humidity
    })
    return res.dataValues;
  }
  async getLastData() {
    const app = this.app;
    const lastData = await app.model.Nodemcu.findOne({
      order: [['id', 'DESC']],
    })
    return lastData.dataValues;
  }
}

module.exports = NodeMcuService;