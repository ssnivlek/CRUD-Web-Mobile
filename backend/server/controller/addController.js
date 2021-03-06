const { readFile } = require("../helpers/readFile.js");
const { writeFile } = require("../helpers/writeFile.js");
const { checkJson } = require("../helpers/checkJson.js");
const { correctDate } = require("../helpers/correctDate.js");
var uuid = require("uuid");
const fileProduct = "backend/server/common/data/product.json";

function addObject(req, res) {
	checkJson(fileProduct);

	let obj = req.body;
	let objName = Object.keys(obj)[0];

	obj[objName].id = uuid.v4();
	obj[objName].validade = correctDate(obj[objName].validade);

	let originalProducts = readFile(fileProduct);
	let updatedJson = Object.assign(obj, originalProducts);

	writeFile(fileProduct, updatedJson);

	let updatedProducts = readFile(fileProduct);

	console.log(`Product ${objName} Added`);
	res.send(updatedProducts);
}

module.exports = { addObject };
