const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
	res.send('hotel api response')
});

router.get('/:id', (req, res) => {
	res.send('room by id api response')
});

router.post('/', (req, res) => {
	res.send('create room api response')
});

module.exports = router;