'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

let MojiSchema = new Schema({
  result: {
    type: Object
  },
  cts: {
    type: Date,
    required: true,
    default: Date.now
  }
})

MojiSchema.virtual('cts_display').get(function () {
  return moment(this.cts).format('YYYY-MM-DD HH:mm:ss')
})


module.exports = mongoose.model('Moji', MojiSchema)
