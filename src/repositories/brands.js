const {Brand} = require('../../db/models')

// toda la logica de consulta a la db va en el repositories 

async function exists(name){
    const ret = await Brand.count({
        where:{
            name : name
        }
    })
    return ret==1
}

//Devuelve todas las brands
// npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
async function getBrands(){
    return await Brand.findAll({
        attributes : {
            exclude : ['createdAt','updatedAt']
        }
    })
}

async function getBrandById(id){
    return await Brand.findByPk(id, {
        attributes : {
            exclude : ['createdAt','updatedAt']
        }})
}

async function saveBrand(name, country, logo){
    await Brand.create({
        name : name,
        country : country,
        logo : logo,
    })
}

module.exports = {
    getBrands,
    getBrandById,   
    exists,
    saveBrand,
}

//POST Creacion y carga de datos 