const knex = require('../db/data/snacks.json')

function getAll() {
  console.log('models')
  return knex.snacks
}

function getOne(id) {
  return knex(snacks)
    .where('id', id)
    .first()
}

module.exports = {
  getAll,
  getOne
}