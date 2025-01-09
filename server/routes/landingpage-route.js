const express = require("express");
const { getAllLandingPage, AddLandingPage } = require("../controllers/landingpage-controller");
const router = express.Router();
const { upload } = require("../middleware/upload-images");

router.get("/", getAllLandingPage);
router.post("/add", upload, AddLandingPage);

module.exports = router;
