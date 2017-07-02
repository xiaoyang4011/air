'use strict'

const router = require('koa-router')()
const controller = require('./car.controller')
const co = require('co')

router.post('/command', co.wrap(controller.command))

module.exports = router
