var express = require('express');
var router = express.Router();
var beers = require('../src/repositories/beers');
const { exists } = require('../src/repositories/brands');

/* GET beers page. */
router.get('/', async function(req, res, next) {
  res.json(await beers.getBeers())
});

router.get('/:id', async function(req, res, next) {
  let beer = await beers.getBeerById(req.params.id)

  if(beer){
    return res.json(beer)
  }

  res.status(404).json({
    error: "NOT FOUND",
    code: 404
  })
});

router.get('/name/:name', async function(req, res, next){
  let beer = await beers.getBeerByName(req.params.name)

  if(beer){
    return res.json(beer)
  }

  res.status(404).json({
    error: "BEER NOT FOUND",
    code: 404
  })
  
})

router.post('/', async function(req, res, next){

  let body = req.body
  if (req.body.name == undefined){
    return res.status(400).json({
      message : "NAME_MISSING"
    })
  }
  if(await beers.exists(body.name)){
    return res.status(400).json({
      message: "BEER_EXISTS"
    })
  }

  await beers.uploadBeers(body.name, body.category, body.graduation, body.origin, body.score)
  .then( (response) => {
    res.status(201).json({
      message: body.name + " beer created succesfully!",
      response: response})
  })
  .catch((err) => {
    res.status(400).json(err)
  })

})

module.exports = router;
