// ✅ Import the model only once (no need to import twice)
const Enquiry = require("../../models/enquiry.model");

// ✅ Insert Enquiry Controller
let enquiryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;

  let enquiry = new Enquiry({
    name,
    email,
    phone,
    message,
  });

  enquiry
    .save()
    .then(() => {
      res.send({ status: 1, message: "Enquiry saved successfully" });
    })
    .catch((err) => {
      res.send({
        status: 0,
        message: "Error while saving enquiry",
        error: err,
      });
    });
};

// ✅ View Enquiry Controller
let enquiryList = async (req, res) => {
  try {
    let enquiries = await Enquiry.find(); // Consistent variable name
    res.send({ status: 1, enquiryList: enquiries });
  } catch (err) {
    res.send({ status: 0, message: "Error fetching enquiries", error: err });
  }
};




// ✅ Delete Enquiry
let enquiryDelete = async (req, res) => {
  try {
    await Enquiry.findByIdAndDelete(req.params.id);
    res.send({ status: 1, message: "Enquiry deleted successfully" });
  } catch (err) {
    res.send({ status: 0, message: "Error deleting enquiry", error: err });
  }
};

// ✅ Update Enquiry
let enquiryUpdate = async (req, res) => {
  try {
    await Enquiry.findByIdAndUpdate(req.params.id, req.body);
    res.send({ status: 1, message: "Enquiry updated successfully" });
  } catch (err) {
    res.send({ status: 0, message: "Error updating enquiry", error: err });
  }
};

module.exports = { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate };

