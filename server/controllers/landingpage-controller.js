const landingPage = require("../modal/landing-page");

const getAllLandingPage = (req, res) => {
  res.status(200).json({
    message: "success message",
  });
};

const AddLandingPage = (req, res) => {
  try {
    // Base URL for static files
    const baseUrl = `${req.protocol}://${req.get("host")}/uploads`;

    const { headerItem, headingOne, headingOneDescription, headingTwo, headingTwoList, themeColor } = req.body;

    const logoData = req.files.find((f) => f.fieldname === "logo").filename;
    const logo = `${baseUrl}/${logoData}`;

    const bannerData = req.files.find((f) => f.fieldname === "bannerImage").filename;
    const bannerImage = `${baseUrl}/${bannerData}`;

    const headingTwoData = req.files.find((f) => f.fieldname === "headingTwoImage").filename;
    const headingTwoImage = `${baseUrl}/${headingTwoData}`;

    const galleryImagesArray = [];
    console.log(req.body.amenities);
    const filterGalleryImagesFromFiles = req.files.filter((f) => f.fieldname === "gallery");
    filterGalleryImagesFromFiles.map((v) => {
      galleryImagesArray.push(`${baseUrl}/${v.filename}`);
    });

    const amenitiesData = [];
    // Extract amenities text from req.body
    const amenitiesText = req.body.amenities;
    const amenitiesFiles = req.files.filter((f) => /^amenities\[\d+\]\[image\]$/.test(f.fieldname));

    // Map through the amenities text
    if (amenitiesText && Array.isArray(amenitiesText)) {
      amenitiesText.forEach((amenity, index) => {
        const imageFile = amenitiesFiles.find((file) => file.fieldname === `amenities[${index}][image]`);
        const imageUrl = imageFile ? `${baseUrl}/${imageFile.filename}` : null;

        amenitiesData.push({
          text: amenity.text, // Get the text field from the body
          image: imageUrl, // Add the corresponding image URL
        });
      });
    }

    res.status(201).json({
      status: true,
      data: {
        headerItem,
        headingOne,
        headingOneDescription,
        headingTwo,
        headingTwoList,
        themeColor,
        logo,
        bannerImage,
        headingTwoImage,
        gallery: galleryImagesArray,
        amenities: amenitiesData,
      },
      message: "Landing page added successfully",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Something went wrong! Please try again." });
  }
};

module.exports = {
  getAllLandingPage,
  AddLandingPage,
};
