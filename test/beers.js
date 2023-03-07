const {assert} = require('chai')
const request = require('supertest')
const app = require ('../app')

// esto es mocha
describe('Autenticacion', function(){
	describe('crear una cerveza', function(){
		it('requiere el nombre', function(done){
			//supertest
			request(app)//trae toda la app
				.post('/beers')//enpoint a testear y get/post
				.send({})//lo que le envio por parametro
				//.expect(400, done)//le pasa el done para que sepa que termino el test, esta es la solucion al error de timeout
				.expect(400)
				.end(function(err, res){
					assert.equal(res.body.message, 'NAME_MISSING')
					if(err){
						done(err)
					}
					
					return done()
				})
		})
		
	})

})