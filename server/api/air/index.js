'use strict'

const router = require('koa-router')()
const controller = require('./air.controller')
const co = require('co')

router.post('/create', co.wrap(controller.createAirRecord))
router.get('/get', co.wrap(controller.getCurrentAir))

module.exports = router
