const fs = require("fs");

function writeFile(jsonPath, json) {
	fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2), () => {});
}

module.exports = {
	writeFile,
};
