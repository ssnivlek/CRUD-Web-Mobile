const { readFile } = require("../helpers/readFile.js");
const fileProduct = "backend/server/common/data/product.json";

function listObjects(req, res) {
	let originalProducts = readFile(fileProduct);

	res.send(originalProducts);
}

module.exports = { listObjects };
