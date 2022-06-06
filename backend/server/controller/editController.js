const { readFile } = require("../helpers/readFile.js");
const { writeFile } = require("../helpers/writeFile.js");
const { checkJson } = require("../helpers/checkJson.js");
const fileProduct = "backend/server/common/data/product.json";

function editObject(req, res) {
	checkJson(fileProduct);
	
	let product = req.body.product;
	let objects = req.body.objects;

	let originalProducts = readFile(fileProduct);
	let originalKeys = Object.keys(originalProducts[product]);

	let objectsArray = Object.entries(objects);
	for (let object of objectsArray) {
		if (originalKeys.includes(object[0])) {
			originalProducts[product][object[0]] = object[1];
		}
	}

	writeFile(fileProduct, originalProducts);

	let updatedProducts = readFile(fileProduct);
	res.send(updatedProducts);
}

module.exports = { editObject };
