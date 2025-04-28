let express = require("express");
let mongoose = require("mongoose");
const enquiryRoutes = require("./App/Routes/web/enquiryRoutes");
require("dotenv").config();
const cors = require('cors');

let app = express();




// Middleware to parse JSON
app.use(express.json());  // ✅ Fix: added ()

app.use(cors());
// ROUTES
app.use("/api/web/enquiry", enquiryRoutes);  // ✅ Fix: added starting slash


// MongoDB connection
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);  // ✅ Fix: shows actual port
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
