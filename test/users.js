const {assert} = require('chai')
const request = require('supertest')
const app = require ('../app')

// esto es mocha
describe('Autenticacion', function(){
	describe('crear un usuario', function(){
		it('caso de exito', function(done){
			// dentro de aca las validaciones son con la libreria chai
			
			
			//supertest
			request(app)//trae toda la app
				.post('/users')//enpoint a testear y get/post
				.send({
					"firstName": "Juan",
					"lastName": "Perez",
					"email": "juanperez4@mail.com",
					"password": "123456"
				})//lo que le envio por parametro
				//.expect(400, done)//le pasa el done para que sepa que termino el test, esta es la solucion al error de timeout
				.expect(201, done)}
				)
		it("error por mail repetido", function(done){
			// dentro de aca las validaciones son con la libreria chai
			
			
			//supertest
			request(app)//trae toda la app
				.post('/users')//enpoint a testear y get/post
				.send({
					"firstName": "Juan",
					"lastName": "Perez",
					"email": "juanperez@mail.com", // es el dato de la seed
					"password": "123456",
				  })//lo que le envio por parametro
				//.expect(400, done)//le pasa el done para que sepa que termino el test, esta es la solucion al error de timeout
				.expect(400)
				.end(function(err, res){
					assert.equal(res.body.message, 'USER_ALREADY_EXISTS')
					if(err){
						done(err)
					}
					
					return done()
				})
				
		})
		
	})
	
	

		//sin la marca existe que no lo acepte 
	
})
