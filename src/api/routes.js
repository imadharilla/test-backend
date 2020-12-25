const router = require('express').Router({ mergeParams: true })

router.get('/', (req, res) => {
  console.log('haha')
  return res.send({ message: 'tnaket' })
})

module.exports = router
