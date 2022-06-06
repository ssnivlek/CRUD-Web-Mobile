const fs = require("fs");

function checkJson(jsonPath) {
	let json = fs.readFileSync(jsonPath);
	if (Object.keys(json).length == 0) {
		fs.writeFileSync(jsonPath, JSON.stringify({}, null, 2), () => {});
	}
}

module.exports = {
	checkJson,
};
