const router = require('express').Router({ mergeParams: true })
const users = require('./users/routes')

router.use('/users', users)

module.exports = router
