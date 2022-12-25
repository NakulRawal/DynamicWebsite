if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

const hbs = require("hbs");

const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");

const dbUrl = process.env.DB_URL;
//connect mongoose with mongo
mongoose.set("strictQuery", true);
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
  // Service.create([
  //   {
  //     icon: "fa-duotone fa-campground",
  //     title: "Provide Best Campground ",
  //     description: "Campground",
  //     linkText: "https://wildness.onrender.com/",
  //     link: "Check",
  //   },
  //   {
  //     icon: "fa-solid fa-laptop-code",
  //     title: "Provide Best TYPING SPEED TEST ",
  //     description: "TYPING SPEED TEST",
  //     linkText: "https://www.livechat.com/typing-speed-test/#/",
  //     link: "Start typing",
  //   },
  //   {
  //     icon: "fa-brands fa-google",
  //     title: "Search Any information ",
  //     description: "Google God",
  //     linkText: "https://www.google.com/",
  //     link: "Google",
  //   },
  // ]);
  //   Slider.create([
  //     {
  //       title: "learn mongodb in very easy way",
  //       subTitle:
  //         "MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases",
  //       imageUrl: "/static/images/2.png",
  //     },
  //     {
  //       title: "learn express.js in very easy way",
  //       subTitle:
  //         "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. Its a layer built on the top of the Node js that helps manage servers and routes",
  //       imageUrl: "/static/images/3.png",
  //     },
  //     {
  //       title: "learn node.js in very easy way",
  //       subTitle:
  //         "Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the clients browser.",
  //       imageUrl: "/static/images/5.png",
  //     },
  //   ]);

  //   Detail.create({
  //     brandName: "Nocool Technical Solutions",
  //     brandIconUrl:
  //       "https://img.freepik.com/free-psd/3d-illustration-capricorn-zodiac-sign_23-2149358001.jpg?w=740&t=st=1671713239~exp=1671713839~hmac=e82abc370f86c7ba8d6f702f3c131cbfd8c54b54333901dbbbe15047bfcb1f37",
  //     links: [
  //       {
  //         label: "Home",
  //         url: "/",
  //       },
  //       {
  //         label: "Services",
  //         url: "/services",
  //       },
  //       {
  //         label: "Gallery",
  //         url: "/gallery",
  //       },
  //       {
  //         label: "about",
  //         url: "/about",
  //       },
  //       {
  //         label: "contact Us",
  //         url: "/contact-us",
  //       },
  //     ],
  //   });
  console.log("MongoDb connection open!!!");
}
//connected mongoose with mongo

//(template engine)

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/static", express.static("public"));
app.use("/", routes);

app.all("*", (req, res, next) => {
  res.redirect("/");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on Port ${port}`);
});
