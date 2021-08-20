const router = require("express").Router();
const travellers = require("./travellers");
const locations = require("./locations");

router.use("/locations", locations);
router.use("/travellers", travellers);

module.exports = router;
