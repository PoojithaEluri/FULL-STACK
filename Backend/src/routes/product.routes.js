const express = require("express");
const router=express.Router();

const {createProduct}=require("../controllers/product.controller");
const {getProducts}=require("../controllers/product.controller");
const {getProductById}=require("../controllers/product.controller");
const { updateProduct } = require("../controllers/product.controller");
const { deleteProduct } = require("../controllers/product.controller");

router.post("/",createProduct);
router.get("/",getProducts);
router.get("/:id",getProductById);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports=router;