const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

// Ana Sayfa
router.get("/", (ctx) => {
	ctx.body = "<h1>Index sayfasına hoşgeldiniz</h1>";
});

// Hakkimda Sayfası
router.get("/hakkimda", (ctx) => {
	ctx.body = "<h1>Hakkımda sayfasına hoşgeldiniz</h1>";
});

// Iletisim Sayfası
router.get("/iletisim", (ctx) => {
	ctx.body = "<h1>İletişim sayfasına hoşgeldiniz</h1>";
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
