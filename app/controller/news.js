// app/controller/news.js
const Controller = require('egg').Controller;

class NewsController extends Controller {
  async List() {
    this.ctx.body = await this.ctx.service.news.list();
  }
}

module.exports = NewsController;