const multer = require("multer");

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Define Multer fields
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed!"));
    }
  },
}).any();
// }).fields([
//   { name: "logo", maxCount: 1 },
//   { name: "bannerImage", maxCount: 1 },
//   { name: "headingTwoImage", maxCount: 1 },
//   { name: "gallery", maxCount: 5 },
//   { name: "amenities[][image]", maxCount: 10 }, // Handle up to 10 amenity images
// ]);

// const uploadBlogImage = multer({ storage });

// // Multer for handling multiple fields
// const upload = uploadBlogImage.fields([
//   { name: "logo", maxCount: 1 },
//   { name: "bannerImage", maxCount: 1 },
//   { name: "headingTwoImage", maxCount: 1 },
//   { name: "gallery", maxCount: 5 },
//   { name: "amenities[0][image]", maxCount: 1 }, // Example for amenities
//   { name: "amenities[0][image]", maxCount: 1 }, // Handle multiple amenities
//   { name: "amenities[1][image]", maxCount: 1 }, // Example for amenities
//   { name: "amenities[1][image]", maxCount: 1 }, // Handle multiple amenities
// ]);

module.exports = {
  upload,
};
