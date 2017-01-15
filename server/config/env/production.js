'use strict'

module.exports = {
  log: {
    logLevel: 'INFO',
    maxLogSize: 10485760,
    backups: 100,
    cwd: '.',
    alwaysIncludePattern: true
  },
  db: {
    uri: 'mongodb://' + (process.env.DB_HOST_PORT || '127.0.0.1:30000') + '/air',
    options: {
      user: '',
      pass: ''
    }
  },
  session: {
    cookie: {maxAge: 86400000}
  }
}
