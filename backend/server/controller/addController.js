const { readFile } = require("../helpers/readFile.js");
const { writeFile } = require("../helpers/writeFile.js");
const { checkJson } = require("../helpers/checkJson.js");
var uuid = require("uuid");
const fileProduct = "backend/server/common/data/product.json";

function addObject(req, res) {
	checkJson(fileProduct);

	let obj = req.body;
	let objName = Object.keys(obj)[0];

	obj[objName].id = uuid.v4();

	let originalProducts = readFile(fileProduct);
	let updatedJson = Object.assign(obj, originalProducts);

	writeFile(fileProduct, updatedJson);

	let updatedProducts = readFile(fileProduct);
	res.send(updatedProducts);
}

module.exports = { addObject };
