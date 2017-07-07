'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

let NightmareSchema = new Schema({
  result: {
    type: Object,
  },
  cts: {
    type: Date,
    required: true,
    default: Date.now
  }
})

NightmareSchema.index({cts: -1});

NightmareSchema.virtual('cts_display').get(function () {
  return moment(this.cts).format('YYYY-MM-DD HH:mm:ss')
})

module.exports = mongoose.model('Nightmare', NightmareSchema)
