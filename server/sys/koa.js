'use strict'

const session = require('koa-generic-session')
const responseTime = require('koa-response-time')
const logger = require('koa-logger')
const json = require('koa-json')
const compress = require('koa-compress')
const bodyParser = require('koa-bodyparser')
const log4js = require('koa-log4')
const convert = require('koa-convert')
const config = require('./../config')
const cors = require('koa-cors')

module.exports = function (app) {
  app.use(convert(cors({
    origin: true,
    credentials: true
  })))
  app.use(responseTime())
  app.use(logger())
  app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))
  app.use(bodyParser())
  app.use(json())
  app.keys = [config.secrets]
  app.use(compress())
}
