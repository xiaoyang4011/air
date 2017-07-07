'use strict'

const router = require('koa-router')()
const controller = require('./nightmare.controller')
const co = require('co')

router.post('/create', co.wrap(controller.create))
router.get('/get', co.wrap(controller.get))

module.exports = router
