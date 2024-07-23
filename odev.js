const fs = require("fs");

//Dosya yazma
fs.writeFile(
	"employees.json",
	'{"name": "Employee 1 Name", "salary": 2000}',
	"utf8",
	(err) => {
		if (err) console.log(err);
		console.log("employees.json Olusturuldu.");
	}
);
//Veriyi okumak
fs.readFile("employees.json", "utf8", (err, data) => {
	if (err) console.log(err);
	console.log(data);
	console.log("dosya okundu");
});
//yeni veri eklemek
fs.appendFile(
	"employees.json",
	'\n {"name": "Employee 2 Name", "salary": 5000}',
	"utf8",
	(err) => {
		if (err) console.log(err);
		console.log("yeni veri eklendi");
	}
);
//employees dosyasini silmek
fs.unlink("employees.json", (err) => {
	if (err) console.log(err);
	console.log("employees silindi");
});
