const mongoose = require('mongoose')
const config = require('../configuration')
const url = config.get('MONGO_DATABASE_URL')
const db = config.get('MONGO_DATABASE_NAME')

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  socketTimeoutMS: 45000,
  promiseLibrary: global.Promise,
  serverSelectionTimeoutMS: 5000,
  keepAlive: true,
  keepAliveInitialDelay: 300000,
  poolSize: 10,
  useFindAndModify: false
}

exports.connect = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(`${url}/${db}`, options)

    const connection = mongoose.connection
    connection.on('error', reject)
    connection.once('open', resolve)
  })
}
