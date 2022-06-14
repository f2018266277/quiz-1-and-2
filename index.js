var express = require("express");
const path = require("path");
const bodyParser = require(`body-parser`);
var app = express();

app.set(`view engine`, `ejs`);
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

recepies = [
  {
    id: "1",
    title: "Benefits of organic food",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "https://media.istockphoto.com/photos/paleo-diet-healthy-food-background-picture-id1301565375?b=1&k=20&m=1301565375&s=170667a&w=0&h=D-u_kxPS9SL5MWmhN0xbwfNxPmqbqzhyjYvypM7V7xU=",
  },
  {
    id: "2",
    title: "Pasta Mania",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "https://media.istockphoto.com/photos/vegetarian-dishes-picture-id1313418058?b=1&k=20&m=1313418058&s=170667a&w=0&h=-BZRud6u510emxg26hpFdOtsPSjOEsB0OCsIue_cdi8=",
  },
  {
    id: "3",
    title: "Jombo Beef Steak",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://media.istockphoto.com/photos/barbecue-rib-eye-steak-or-rump-steak-dry-aged-wagyu-entrecote-steak-picture-id1079920024?b=1&k=20&m=1079920024&s=170667a&w=0&h=FZconGrzfpDXhzoV0qaUFKxVBObMowMD5tr2sIN0or0=",
  },
];

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/recepies", function (req, res) {
  res.render("recepies", { recepies: recepies });
});

app.get("/training", function (req, res) {
  res.render("training");
});

app.get("/add", function (req, res) {
  res.render("add");
});

app.post("/add", function (req, res) {
  let data = {
    id: req.body.id,
    title: req.body.title,
    text: req.body.details,
    img: req.body.url,
  };
  recepies.push(data);
  res.render("recepies", { recepies: recepies });
});

app.get("/recepie/:id", function (req, res) {
  res.render("recepie", { id: req.params.id, recepies: recepies });
});

app.post("/recepie/:id", function (req, res) {
  let id = req.body.id;
  index = 0;
  for (let i = 0; i < recepies.length; i++) {
    if (recepies[i].id == id) {
      index = i;
      break;
    }
  }
  recepies.splice(index, index);
  res.redirect("../");
});

app.listen(port);
