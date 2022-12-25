const express = require("express");
const router = express.Router();

const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Contact = require("../models/Contact");
const Service = require("../models/Service");

////
router.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "63a7294531eb24acddbbcf31" });
  const slides = await Slider.find();
  const services = await Service.find();
  res.render("index", { details, slides, services });
});

router.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "63a466a9bf9937c7ae16fe38" });
  res.render("gallery", { details });
});

router.post("/process-contact-form", async (req, res) => {
  try {
    const data = await Contact.create(req.body);
    console.log(data);
  } catch (e) {
    console.log(e);
  }

  res.redirect("/");
});
module.exports = router;
