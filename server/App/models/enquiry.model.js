let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let enquirySchema = new Schema({
  name: {
    type: String,
    required: true, // ✅ correct
  },
  email: {
    type: String,
    required: true, // ✅ fixed spelling
    unique: true,
  },
  phone: {
    type: String,
    required: true, // ✅ fixed spelling
  },
  message: {
    type: String,
    required: true, // ✅ fixed spelling
  },
});

let enquiryModel = mongoose.model("Enquiry", enquirySchema);
module.exports = enquiryModel;
