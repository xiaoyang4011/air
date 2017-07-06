'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

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

module.exports = mongoose.model('Nightmare', NightmareSchema)
