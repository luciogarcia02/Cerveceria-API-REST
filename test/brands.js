const {assert} = require('chai')
const request = require('supertest')
const app = require ('../app')

// esto es mocha
describe('Autenticacion', function(){
	describe('crear una marca', function(){
		it('requiere el nombre', function(done){
			// dentro de aca las validaciones son con la libreria chai
			
			
			//supertest
			request(app)//trae toda la app
				.post('/brands')//enpoint a testear y get/post
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
				
				
				//let message = "EMAIL_MISSING"

				//assert.equal(statusCode, 400)
				//assert.equal(message, 'EMAIL_MISSING')
		})
		
	})
	
	

		//sin la marca existe que no lo acepte 
	
		
})