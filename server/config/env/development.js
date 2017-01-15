'use strict'

module.exports = {
  log: {
    logLevel: 'INFO',
    maxLogSize: 10485760,
    backups: 100,
    cwd: '/opt/logs/air/',
    alwaysIncludePattern: true
  },
  db: {
    uri: 'mongodb://' + (process.env.DB_HOST_PORT || '127.0.0.1:27017') + '/air',
    options: {
      user: '',
      pass: ''
    }
  },
  session: {
    cookie: {maxage: 600000}
  }
}
