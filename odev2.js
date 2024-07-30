const http = require("http");

const server = http.createServer((req, res) => {
	const url = req.url;

	if (url === "/") {
		res.writeHead(200, { "Conten-Type": "text/html" });
		res.write("<h2>INDEX Sayfasi</h2>");
	} else if (url === "/about") {
		res.writeHead(200, { "Conten-Type": "text/html" });
		res.write("<h2>Hakkimizda Sayfasi</h2>");
	} else if (url === "/contact") {
		res.writeHead(200, { "Conten-Type": "text/html" });
		res.write("<h2>Iletisim Sayfasi</h2>");
	} else {
		res.writeHead(404, { "Conten-Type": "text/html" });
		res.write("404 Sayfa Bulunamadi");
	}
	res.end();
});

const port = 5000;
server.listen(port, () => {
	console.log(`Sunucu port ${port} de baslatildi`);
});
