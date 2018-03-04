const snacksModel = require('../models/snacks.js')

function getAllSnacks(req, res, next) {
  console.log('controller')
  snacksModel.getAll()
    .then(snacks => res.status(200).json(snacks))
    .catch(err => next(err))
}

function getOneSnacks(req, res, next) {
  snacksModel.getOne(req.params.id)
    .then(snack => res.status(200).json(snack))
    .catch(err => next(err))
}


module.exports = {
  getAllSnacks,
  getOneSnacks
}