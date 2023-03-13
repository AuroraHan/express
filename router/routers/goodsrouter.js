const express = require("express");

const router = express.Router();

//路由中间件
router.get("/goods", function (req, res) {
  res.send("商品详情");
});

router.get("/goodslist", function (req, res) {
  res.send("商品列表");
});

module.exports = router;
