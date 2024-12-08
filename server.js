const { createServer } = require("node:http");
// const { Buffer } = require("node:buffer");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

const server = createServer((req, res) => {
	const url = req.url;
	if (!url) throw new Error("no url wtf");

	if (url.startsWith("/static/css")) {
		const pth = join(".", url);
		console.debug("Static request for", pth);
		const fileContent = readFileSync(pth);

		res.writeHead(200, {
			"content-length": fileContent.byteLength,
			"content-type": "text/css",
		});
		res.write(fileContent);
		return res.end();
	}

	if (url.startsWith("/static/js")) {
		const pth = join(".", url);
		console.debug("Static request for", pth);
		const fileContent = readFileSync(pth);

		res.writeHead(200, {
			"content-length": fileContent.byteLength,
			"content-type": "text/javascript",
		});
		res.write(fileContent);
		return res.end();
	}

	if (url.startsWith("/static/imgs")) {
		const pth = join(".", url);
		console.debug("Static request for", pth);
		const fileContent = readFileSync(pth);
    
    console.log(pth);

		res.writeHead(200, {
			"content-length": fileContent.byteLength,
			"content-type": "image/svg+xml",
		});
		res.write(fileContent);
		return res.end();
	}

	if (url !== "/") {
		res.writeHead(404);
		return res.end();
	}

	const responseContent = readFileSync("./index.html");

	res.writeHead(200, {
		// "content-length": Buffer.byteLength(responseContent),
		"content-length": responseContent.byteLength,
		"content-type": "text/html",
	});
	// res.write(Buffer.from(responseContent));
	res.write(responseContent);
	res.end();
});

console.log("Listening on port 8000");
server.listen(8000, "127.0.0.1");
