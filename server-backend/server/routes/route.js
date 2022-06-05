const express = require("express");
const router = express.Router();

const { addObject } = require("../controller/addController");
const { deleteObject } = require("../controller/deleteController");
const { editObject } = require("../controller/editController");
const { listObjects } = require("../controller/listController");

router.post("/add", addObject);
router.delete("/delete", deleteObject);
router.put("/edit", editObject);
router.get("/list", listObjects);

module.exports = router;
