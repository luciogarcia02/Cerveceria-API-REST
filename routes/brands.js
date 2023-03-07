var express = require('express');
//const brand = require('../db/models/brand');
var router = express.Router();
var brands = require('../src/repositories/brands')

/* GET home page. */
// http://localhost:3000/brands
router.get('/', async function(req, res, next) {

  let dev =await brands.getBrands()
  res.json(dev);

});

// http://localhost:3000/brands/1
router.get('/:id', async function(req, res, next) {

  let myBrand = await brands.getBrandById(req.params.id)

  if(myBrand){
    res.json(myBrand);
  }else{res.status(404).json({
    error: "NOT FOUND",
    code: 404
  })}

});

router.post('/', async function(req, res, next){

  let body = req.body

  let existe =await brands.exists(body.name)
  console.log(existe)
  if(existe){
    return res.status(400).json({
      message: "BRAND_EXISTS"
    })
  }

  await brands.saveBrand(body.name, body.country, body.logo)
  .then( (response) => {
    res.status(201).json({
      message: body.name + " brand created succesfully!",
      response: response})
  })
  .catch((err) => {
    res.status(400).json(err)
  })

})

module.exports = router;
