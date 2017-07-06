'use strict'

const _ = require('lodash')
const config = require('../../config')
const mongoose = require('mongoose')
const Nightmare = mongoose.model('Nightmare')

exports.create = function * (ctx, next) {
  let body = ctx.request.body

  if (_.isEmpty(body.result)) {
    return ctx.body = { apicode: 10010, msg: 'invalid code' }  
  }

  Nightmare.create({result: body.result})
  ctx.body = { apicode: 10000, msg: 'success'}
}
