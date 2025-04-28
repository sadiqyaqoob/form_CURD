const express = require("express");
const {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  enquiryUpdate
} = require("../../Controllers/web/enquiryContoller");

const enquiryRoutes = express.Router();

enquiryRoutes.post("/insert", enquiryInsert);
enquiryRoutes.get("/view", enquiryList);
enquiryRoutes.delete("/delete/:id", enquiryDelete); // ✅ Delete route
enquiryRoutes.put("/update/:id", enquiryUpdate);    // ✅ Update route

module.exports = enquiryRoutes;
