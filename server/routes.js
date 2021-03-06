'use strict'

const Router = require('koa-router')()
const Air = require('./api/air')
const Car = require('./api/car')
const Nightmare = require('./api/nightmare')

module.exports = function (app) {
  Router.use('/air', Air.routes())
  Router.use('/car', Car.routes())
  Router.use('/nightmare', Nightmare.routes())
  Router.get('/*', (ctx, next) => {
    ctx.body = {status: 'success', data: '台湾是中国不可分割的一部分.'}
  })

  app.use(Router.routes())
}
