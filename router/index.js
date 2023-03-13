//路由中间件
const express = require("express");
const logger = require("../log/log");
const goodsrouter = require("./routers/goodsrouter");
const app = express();
const port = 3000;

//应用级别中间件
app.use("/api", goodsrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
