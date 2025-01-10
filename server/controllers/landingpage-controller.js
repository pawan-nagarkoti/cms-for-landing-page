const landingPage = require("../modal/landing-page");

// Get all landing pages
const getAllLandingPage = async (req, res) => {
  try {
    const getLandingPagesData = await landingPage.find({});
    getLandingPagesData.map((v) => console.log(v));
    if (getLandingPagesData.length > 0) {
      return res.status(200).json({
        data: getLandingPagesData,
        message: "landing page fetched successfully",
      });
    } else {
      return res.status(400).json({
        data: [],
        message: "no found data",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something is wrong! please try again",
    });
  }
};

// Add landing pages
const AddLandingPage = async (req, res) => {
  try {
    // Base URL for static files
    const baseUrl = `${req.protocol}://${req.get("host")}/uploads`;

    const { headerItem, headingOne, headingOneDescription, headingTwo, headingTwoList, themeColor } = req.body;

    const logoData = req.files.find((f) => f.fieldname === "logo")?.filename;
    const logo = `${baseUrl}/${logoData}`;

    const bannerData = req.files.find((f) => f.fieldname === "bannerImage")?.filename;
    const bannerImage = `${baseUrl}/${bannerData}`;

    const headingTwoData = req.files.find((f) => f.fieldname === "headingTwoImage")?.filename;
    const headingTwoImage = `${baseUrl}/${headingTwoData}`;

    // Create GalleryImage documents
    // Handle gallery images
    const galleryFiles = req.files.filter((f) => f.fieldname === "gallery");
    const galleryImagesArray = galleryFiles.map((file) => ({
      imageUrl: `${baseUrl}/${file.filename}`,
      createdAt: new Date(),
    }));
    console.log(galleryImagesArray);
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

    const newLandingPageAdded = await landingPage.create({
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
    });
    res.status(201).json({
      status: true,
      data: newLandingPageAdded,
      message: "Landing page added successfully",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Something went wrong! Please try again." });
  }
};

// Get single landing page
const getSingleLandingPage = async (req, res) => {
  try {
    const singlePageId = req.params.id;
    if (!singlePageId) {
      res.status(400).json({
        message: "Please enter correct Id",
      });
    }
    const singlePageData = await landingPage.findById(singlePageId);

    res.status(200).json({
      success: true,
      data: singlePageData,
      message: "single landing page data fetched",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

// delete landing page
const deleteLandingPage = async (req, res) => {
  try {
    const deleteId = req.params.id;
    if (!deleteId) {
      res.status(400).json({
        message: "please enter correct id",
      });
    }
    const deletedLandingPageData = await landingPage.findByIdAndDelete(deleteId);
    res.status(200).json({
      status: true,
      data: deletedLandingPageData,
      message: "landing page deleted successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "landing page deleted",
    });
  }
};

// update landing page
const updateLandingPage = async (req, res) => {
  try {
    const updatedId = req.params.id;

    // Check if ID is provided
    if (!updatedId) {
      return res.status(400).json({
        message: "Landing page ID is required",
      });
    }

    // Base URL for image paths
    const baseUrl = `${req.protocol}://${req.get("host")}/uploads`;

    // Destructure body data
    const { headerItem, headingOne, headingOneDescription, headingTwo, headingTwoList, themeColor, amenities } = req.body;

    // Prepare update data object
    const updateData = {
      headerItem,
      headingOne,
      headingOneDescription,
      headingTwo,
      headingTwoList: headingTwoList ? headingTwoList.split(",") : undefined, // Split comma-separated list
      themeColor,
    };

    // Handle uploaded files
    if (req.files && req.files.length > 0) {
      const logoFile = req.files.find((file) => file.fieldname === "logo");
      if (logoFile) {
        updateData.logo = `${baseUrl}/${logoFile.filename}`;
      }

      const bannerFile = req.files.find((file) => file.fieldname === "bannerImage");
      if (bannerFile) {
        updateData.bannerImage = `${baseUrl}/${bannerFile.filename}`;
      }

      const headingTwoFile = req.files.find((file) => file.fieldname === "headingTwoImage");
      if (headingTwoFile) {
        updateData.headingTwoImage = `${baseUrl}/${headingTwoFile.filename}`;
      }

      const galleryImagesArray = [];
      const filterGalleryImagesFromFiles = req.files.filter((f) => f.fieldname === "gallery");
      console.log(filterGalleryImagesFromFiles);
      filterGalleryImagesFromFiles.forEach((file) => {
        galleryImagesArray.push(`${baseUrl}/${file.filename}`);
      });
      if (galleryImagesArray.length > 0) {
        updateData.gallery = galleryImagesArray;
      }
    }

    // Handle amenities update
    if (amenities && Array.isArray(amenities)) {
      const updatedAmenities = [];
      const amenitiesFiles = req.files.filter((f) => /^amenities\[\d+\]\[image\]$/.test(f.fieldname));

      amenities.forEach((amenity, index) => {
        const parsedAmenity = JSON.parse(amenity); // Ensure amenities text is parsed if sent as a string
        const imageFile = amenitiesFiles.find((file) => file.fieldname === `amenities[${index}][image]`);
        const imageUrl = imageFile ? `${baseUrl}/${imageFile.filename}` : parsedAmenity.image || null; // Keep existing image if no new file is uploaded

        // Validate and add to updated amenities array
        if (parsedAmenity.text && imageUrl) {
          updatedAmenities.push({
            text: parsedAmenity.text,
            image: imageUrl,
          });
        }
      });

      if (updatedAmenities.length > 0) {
        updateData.amenities = updatedAmenities;
      }
    }

    // Update the landing page in the database
    const updatedPage = await landingPage.findByIdAndUpdate(
      updatedId,
      { $set: updateData },
      { new: true } // Return updated document
    );

    // If no landing page found
    if (!updatedPage) {
      return res.status(404).json({
        message: "Landing page not found",
      });
    }

    // Respond with updated data
    res.status(200).json({
      success: true,
      data: updatedPage,
      message: "Landing page updated successfully",
    });
  } catch (error) {
    console.error("Error updating landing page:", error.message);
    res.status(500).json({
      message: "Something went wrong! Please try again.",
    });
  }
};

module.exports = {
  getAllLandingPage,
  AddLandingPage,
  getSingleLandingPage,
  deleteLandingPage,
  updateLandingPage,
};
