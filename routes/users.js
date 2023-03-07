var express = require('express');
//const User = require('../db/models/User');
var router = express.Router();
var users = require('../src/repositories/users')

/* GET home page. */
// http://localhost:3000/users
router.get('/', async function(req, res, next) {

  let dev =await users.getUsers()
  res.json(dev);

});

// http://localhost:3000/users/1
router.get('/:id', async function(req, res, next) {

  let myUser = await users.getUserById(req.params.id)

  if(myUser){
    res.json(myUser);
  }else{res.status(404).json({
    error: "NOT FOUND",
    code: 404
  })}


});

router.post('/', async function(req, res, next){

  let body = req.body

  let existe =await users.exists(body.email)
  console.log(existe)
  if(existe){
    return res.status(400).json({
      message: "USER_ALREADY_EXISTS"
    })
  }
  console.log("intento guardar")
  await users.saveUser(body.firstName, body.lastName, body.email, body.password)
  .then( (response) => {
    res.status(201).json({
      message: body.email + " User created succesfully!",
      response: response})
  })
  .catch((err) => {
    res.status(400).json(err)
  })

})



module.exports = router;