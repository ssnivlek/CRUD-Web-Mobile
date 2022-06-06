const { readFile } = require("../helpers/readFile.js");
const { checkJson } = require("../helpers/checkJson.js");
const fileProduct = "backend/server/common/data/product.json";

function listObjects(req, res) {
	checkJson(fileProduct);

	let originalProducts = readFile(fileProduct);

	res.send(originalProducts);
}

module.exports = { listObjects };
