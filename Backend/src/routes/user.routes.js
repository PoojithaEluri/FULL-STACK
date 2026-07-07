const express = require("express");
const router=express.Router();

const {createUser}=require("../controllers/user.controller");
const {getUsers}=require("../controllers/user.controller");
const {getUserById}=require("../controllers/user.controller");
const { updateUser } = require("../controllers/user.controller");
const { deleteUser } = require("../controllers/user.controller");

router.post("/",createUser);
router.get("/",getUsers);
router.get("/:id",getUserById);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports=router;