const {Publication} = require('../../db/models')

let attributesToExclude = ['createdAt', 'updatedAt']

async function getPublications(){
  return await Publication.findAll({
    attributes: {
      exclude: attributesToExclude
    }
  })
}

async function getPublictionsById(id){
  return await Publication.findByPk(id, {
    attributes: {
      exclude: attributesToExclude
    }
  })
}

// async function getBeerByName(name){
//   return await Publications.findOne({
//     where: {name: name}
//   })
// }

// async function exists(name){
//   return await Publications.count({
//     where: {name}
//   }) == 1
// }

// async function uploadBeers(name, category, graduation, origin, score){
//   return await Beers.create({
//     name,
//     category,
//     graduation,
//     origin,
//     score,
//   })

// }

module.exports = {
  getPublications,
  getPublictionsById
}