const fs = require("fs");

function readFile(jsonPath) {
	let json = fs.readFileSync(jsonPath);
	return JSON.parse(json);
}

module.exports = {
	readFile,
};
