const mongoose = require("mongoose");

const LandingPageSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
    trim: true,
  },
  headerItem: {
    type: [String],
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
    trim: true,
  },
  headingOne: {
    type: String,
    required: true,
    trim: true,
  },
  headingOneDescription: {
    type: String,
    required: true,
    trim: true,
  },
  headingTwo: {
    type: String,
    required: true,
    trim: true,
  },
  headingTwoList: {
    type: [String],
    required: true,
  },
  headingTwoImage: {
    type: String,
    required: true,
    trim: true,
  },
  gallery: {
    type: [String],
    required: true,
  },
  amenities: [
    {
      text: { type: String, required: true }, // Text field for the amenity
      image: { type: String, required: true }, // URL of the uploaded image
    },
  ],
  themeColor: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("LandingPage", LandingPageSchema);
