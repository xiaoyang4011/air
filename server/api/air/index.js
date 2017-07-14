'use strict'

const router = require('koa-router')()
const controller = require('./air.controller')
const co = require('co')

router.post('/create', co.wrap(controller.createAirRecord))
router.post('/moji', co.wrap(controller.moji))
router.get('/moji', co.wrap(controller.getMj))
router.get('/get', co.wrap(controller.getCurrentAir))

module.exports = router
