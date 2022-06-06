const { readFile } = require("../helpers/readFile.js");
const { writeFile } = require("../helpers/writeFile.js");
const { checkJson } = require("../helpers/checkJson.js");
const fileProduct = "backend/server/common/data/product.json";

function deleteObject(req, res) {
	checkJson(fileProduct);

	let product = req.body.product;
	let originalProducts = readFile(fileProduct);

	delete originalProducts[product];

	writeFile(fileProduct, originalProducts);

	let updatedProducts = readFile(fileProduct);
	res.send(updatedProducts);
}

module.exports = { deleteObject };
