// app/service/news.js
const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    const newsList = [1,2,3]
    return newsList
  }
}

module.exports = NewsService;