const {User} = require('../../db/models')

let attributesToExclude = ['createdAt', 'updatedAt']
// toda la logica de consulta a la db va en el repositories 

async function exists(email){
    return await User.count({
      where: {email}
    }) == 1
}
//Devuelve todas los users
// npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
async function getUsers(){
    return await User.findAll({
        attributes : {
            exclude : ['createdAt','updatedAt']
        }
    })
}

async function getUserById(id){
    return await User.findByPk(id, {
        attributes: {
            exclude: attributesToExclude
          }
    })
}

async function saveUser(firstName, lastName, email, password){
    await User.create({
        firstName,
        lastName,
        email,
        password,
    })
}

module.exports = {
    getUsers,
    getUserById,   
    exists,
    saveUser,
}

