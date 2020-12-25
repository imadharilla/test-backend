const express = require('express')
const app = express()
const util = require('util')
const db = require('./database')
const config = require('./configuration')
const routing = require('./routing')

app.use('/api', routing)

exports.start = async () => {
  try {
    const port = config.get('PORT') || 3000

    await db.connect()
    console.log(' Connected to database')

    util.promisify(app.listen).bind(app)(port)
    console.log(' App running at  %s ', port)
    console.log(' Press CTRL-C to stop\n')
  } catch (err) {
    console.info('Something went wrong')
    console.error(err)
  }
}
