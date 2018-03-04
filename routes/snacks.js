const express = require('express');
const knex = require('../db/knex');

const router = express.Router();
const snacksController = require('../controllers/snacks.js')


router.get('/', snacksController.getAllSnacks)
router.get('/:id', snacksController.getOneSnacks)

module.exports = router;