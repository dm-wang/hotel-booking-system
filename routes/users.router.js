const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
	res.send('get all users')
})

module.exports = router