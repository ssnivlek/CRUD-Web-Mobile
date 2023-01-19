const instana = require("@instana/collector");
instana();

const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");

const routes = require("../server/routes/route");
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routes);

app.use(express.static(path.join(__dirname, "../public", "index.html")));

app.use("", (req, res) => {
	res.status(200).sendFile(path.join(__dirname, "../public", "index.html"));
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
	console.log(`App UI available http://localhost:${port}`);
	console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});

app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "../public", "index.html"));
});

module.exports = app;
