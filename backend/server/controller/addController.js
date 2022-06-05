const { readFile } = require("../helpers/readFile.js");
const { writeFile } = require("../helpers/writeFile.js");
const fileProduct = "backend/server/common/data/product.json";

function addObject(req, res) {
	let obj = req.body;
	let originalProducts = readFile(fileProduct);
	let updatedJson = Object.assign(obj, originalProducts);

	writeFile(fileProduct, updatedJson);

	let updatedProducts = readFile(fileProduct);
	res.send(updatedProducts);
}

module.exports = { addObject };
