const {Cart, CartPublications, User, Publication} = require('../../db/models')

let attributesToExclude = ['createdAt', 'updatedAt']

async function getCarts(){
  return await Cart.findAll({
    attributes: {
      exclude: attributesToExclude
    }
  })
}


async function getCartById(id){
  return await Cart.findByPk(id, {
    attributes: {
      exclude: attributesToExclude
    },
    include: [CartPublications, User]
  })
}

async function createCart(userId){
  user = await User.findByPk(userId)

  if (!user){
    throw new Error("User doesn't exist. Can't create cart for non existing user")
  }
  return await Cart.create({
    userId
  })
}

async function addToCart(cartId, publicationId, quantity){
  cart = await Cart.findByPk(cartId)
  if (!cart){
    throw new Error("Cart with cartId=" + cartId + " doesn't exist. Can't add to non existent cart.")
  }

  publication = await Publication.findByPk(publicationId)
  if (!publication){
    throw new Error("Publication with publication does not exist. Cannot add non existent publication")
  }

  return await CartPublications.create({
    cartId, publicationId, quantity
  })
}

async function deleteFromCart(cartPublicationId){
  cartPub = await CartPublications.destroy({
    where: {
      id: cartPublicationId
    }
  })
  if (!cartPub){
    throw new Error("Couldn't destroy cartPub:" + cartPublicationId)
  }

  return cartPub
}

conversion = {
  "USD": 300,
  "ARS": 1
}

async function payCartById(id){
  let cart =  await Cart.findByPk(id, {
    attributes: {
      exclude: attributesToExclude
    },
    include: [CartPublications, User]
  })


  if (!cart){
    throw new Error("Couldnt find cart with id: "+ id)
  }

  let totalPesos = 0
  let dataItems = []
  for (let item of cart.CartPublications){
    pubId = item.dataValues.publicationId

    let publication = await Publication.findByPk(pubId, {
      attributes: {
        exclude: attributesToExclude
      }
    })

    if ((!publication) || (conversion[publication.currency] == undefined )){
      console.log("Couldn't find process publication: " + pubId)
      continue
    }

    pesos = conversion[publication.currency] * publication.amount * item.dataValues.quantity
    totalPesos += pesos
    
    item = {
      publication: publication.name,
      currency: publication.currency,
      price: publication.amount,
      quantity: item.dataValues.quantity,
      totalPesosValue: pesos
    }

    dataItems.push(item)
  }

  return {
    totalPesos: totalPesos,
    dataItems: dataItems
  }

}

module.exports = {
  getCarts,
  getCartById,
  createCart,
  addToCart,
  deleteFromCart,
  payCartById
}