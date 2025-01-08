require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");
const landingPageRoute = require("./routes/landingpage-route");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// database
connectToDB();

// Routes
app.use("/landing-page", landingPageRoute);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
