'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let AirSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  pm1_0_cf: {
    type: Number
  },
  pm2_5_cf: {
    type: Number
  },
  pm10_cf: {
    type: Number
  },
  pm1_0: {
    type: Number
  },
  pm2_5: {
    type: Number
  },
  pm10: {
    type: Number
  },
  cts: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Air', AirSchema)
