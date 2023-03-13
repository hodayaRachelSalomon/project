const express = require("express");
const shopsController = require("../controllers/shops_ctrl");
const shopsRouter = express.Router();

shopsRouter.route("/")
    .get(shopsController.getAllShops)
    .post(shopsController.createShop)


shopsRouter.route("/:id")
    .get(shopsController.getShopById)

module.exports = shopsRouter; 