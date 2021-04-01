let express = require("express");
let router = express.Router();
// The main route
router.get("/", function (req, res) {
  res.send("Estou ativo!!!");
});

module.exports = router;
