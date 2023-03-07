var express = require("express");
var router = express.Router();
var carts = require("../src/repositories/carts");

/* GET carts page. */
router.get("/", async function (req, res, next) {
  res.json(await carts.getCarts());
});

router.get("/:id", async function (req, res, next) {
  let cart = await carts.getCartById(req.params.id);

  if (cart) {
    return res.json(cart);
  }

  res.status(404).json({
    error: "NOT FOUND",
    code: 404,
  });
});

router.post("/", async function (req, res, next) {
  let body = req.body;

  await carts
    .createCart(body.userId)
    .then((response) => {
      res.status(201).json({
        message: "Cart created succesfully.",
        response: response,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
});

router.post("/addPublicationToCart/", async function (req, res, next) {
  let body = req.body;

  await carts
    .addToCart(body.cartId, body.publicationId, body.quantity)
    .then((response) => {
      res.status(201).json({
        message: "Added to cart succesfully.",
        response: response,
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(400).json(err.message);
    });
});

router.delete("/removePublicationFromCart/", async function (req, res, next) {
  let body = req.body;

  await carts
    .deleteFromCart(body.cartPublicationId)
    .then((response) => {
      res.status(201).json({
        message: "Removed from cart succesfully.",
        response: response,
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(400).json(err.message);
    });
});

router.post("/pay", async function (req, res, next) {
  let body = req.body;

  await carts
    .payCartById(body.cartId)
    .then((response) => {
      res.status(201).json({
        message: "Paid cart succesfully.",
        response: response,
      });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(400).json(err.message);
    });
});

module.exports = router;
