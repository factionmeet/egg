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
  async getLastThirtyData() {
    const app = this.app;
    const lastThirtyData = await app.model.Nodemcu.findAll({
      order: [['id', 'DESC']],
      limit: 50
    })
    //console.log(lastThirtyData);
    return lastThirtyData;
  }
  async getLastFifTeenData() {
    const app = this.app;
    const lastThirtyData = await app.model.Nodemcu.findAll({
      order: [['id', 'DESC']],
      limit: 50
    })
    //console.log(lastThirtyData);
    return lastThirtyData;
  }
}

module.exports = NodeMcuService;