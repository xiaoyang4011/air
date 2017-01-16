'use strict'

const mongoose = require('mongoose')
const Air = mongoose.model('Air')
const _ = require('lodash')
const config = require('../../config')

exports.createAirRecord = function * (ctx, next) {
  var body = ctx.request.body

  if (_.isEmpty(body.code)) {
    return ctx.body = { apicode: 10010, msg: 'invalid code' }  
  }

  if (_.isString(body.code) &&  body.code.length === 64 && body.code.slice(0, 8) === config.pi.start_stop_flag) {
    let airData = {
      code: body.code,
      pm1_0_cf: parseInt(body.code.slice(8, 12), 16),
      pm2_5_cf: parseInt(body.code.slice(12, 16), 16),
      pm10_cf: parseInt(body.code.slice(16, 20), 16),
      pm1_0: parseInt(body.code.slice(20, 24), 16),
      pm2_5: parseInt(body.code.slice(24, 28), 16),
      pm10: parseInt(body.code.slice(28, 32), 16),
    }

    yield Air.create(airData)

    ctx.body = { apicode: 10000, msg: 'success' }
  } else {
    ctx.body = { apicode: 10010, msg: 'invalid code' }
  }

}

exports.getCurrentAir = function * (ctx, next) {
  var currentAir = yield Air.findOne().sort({ cts: -1 })

  ctx.body = {
    apicode: 10000,
    msg: 'success',
    data: _.pick(currentAir, ['pm1_0_cf', 'pm2_5_cf', 'pm10_cf', 'pm1_0', 'pm2_5', 'pm10', 'cts_display'])
  }
}
