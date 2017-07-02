'use strict'

const amqp = require("amqplib")
let CH = null

exports.ch = new Promise (function (resolve, reject) {
    if (CH) {
        return resolve(CH)
    } else {
        amqp.connect({
            port: 5672,
            protocol: "amqp",
            hostname: "123.57.27.97",
            username: "car",
            password: "xxx",
        }).then(function (conn) {
            return conn.createChannel();
        }).then(function (ch) {
            CH = ch;
            return resolve(CH)
        });
    }
})