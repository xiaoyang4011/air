'use strict'

const mongoose = require('mongoose')
const Article = mongoose.model('Article')
const Tag = mongoose.model('Tag')

exports.createAirRecord = function * (ctx, next) {
  yield Tag.create({title: 'tag1', content: 'tag1 content'})

  ctx.body = {status: 'success', data: 'success add tag'}
}

