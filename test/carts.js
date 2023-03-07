const {assert} = require('chai')
const request = require('supertest')
const app = require ('../app')

describe('Carts', function(){

  describe('create cart', function(){
		it('POST/createCart does not allow us to create a new cart with an nonexistent user', function(done){
      var objBody = {userId: "5"}
			request(app)
				.post('/carts')//enpoint a testear
				.send(objBody)//lo que le envio por parametro
				.expect(400)
				.end(function(err, res){
					assert.equal(res.body, "User doesn't exist. Can't create cart for non existing user")
					if(err){
						done(err)
					}
					
					return done()
				})
    })
    
  })
})

describe('Carts', function(){

  describe('add publications', function(){

    it('POST/addPublicationToCart allow us to add existents publications to an especific cart', function(done){
      var objBody = {cartId: "2", publicationId: "3", quantity: 2}
			request(app)//trae toda la app
				.post('/carts/addPublicationToCart')//enpoint a testear y get/post
				.send(objBody)//lo que le envio por parametro
				//.expect(400, done)//le pasa el done para que sepa que termino el test, esta es la solucion al error de timeout
				.expect(201, done)
    })

		it('POST/addPublicationToCart do not allow us to add nonexistent publications to a cart', function(done){
      var carrito = {cartId: "1", publicationId: "7", quantity: 2}
			request(app)//trae toda la app
				.post('/carts/addPublicationToCart')//enpoint a testear y get/post
				.send(carrito)//lo que le envio por parametro
				.expect(400)
				.end(function(err, res){
					assert.equal(res.body, "Publication with publication does not exist. Cannot add non existent publication")
					if(err){
						done(err)
					}
					
					return done()
				})
    })
  })
})



