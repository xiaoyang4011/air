'use strict'

const _ = require('lodash')
const config = require('../../config')
const mq = require('../../util/mq')

exports.command = function * (ctx, next) {
  let body = ctx.request.body

  if (_.isEmpty(body.command)) {
    return ctx.body = { apicode: 10010, msg: 'invalid code' }  
  }

  let ch = yield mq.ch
  ch.sendToQueue('car', new Buffer(body.command))
  ctx.body = { apicode: 10000, msg: 'success'}
}
