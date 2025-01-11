const express = require("express");
const {
  getAllLandingPage,
  AddLandingPage,
  getSingleLandingPage,
  deleteLandingPage,
  updateLandingPage,
  deleteAllPages,
} = require("../controllers/landingpage-controller");
const router = express.Router();
const { upload } = require("../middleware/upload-images");

router.get("/", getAllLandingPage);
router.post("/add", upload, AddLandingPage);
router.get("/single-landing-page/:id", getSingleLandingPage);
router.delete("/delete/:id", deleteLandingPage);
router.put("/update/:id", upload, updateLandingPage);
router.delete("/deleteAll", deleteAllPages);

module.exports = router;
