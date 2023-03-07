const {Beers} = require('../../db/models')

let attributesToExclude = ['createdAt', 'updatedAt']

async function getBeers(){
  return await Beers.findAll({
    attributes: {
      exclude: attributesToExclude
    }
  })
}

async function getBeerById(id){
  return await Beers.findByPk(id, {
    attributes: {
      exclude: attributesToExclude
    }
  })
}

async function getBeerByName(name){
  return await Beers.findOne({
    where: {name: name}
  })
}

async function exists(name){
  return await Beers.count({
    where: {name}
  }) == 1
}

async function uploadBeers(name, category, graduation, origin, score){
  return await Beers.create({
    name,
    category,
    graduation,
    origin,
    score,
  })

}

module.exports = {
  getBeers,
  getBeerById,
  uploadBeers,
  getBeerByName,
  exists
}