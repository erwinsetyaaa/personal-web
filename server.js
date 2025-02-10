const express = require("express");
const app = express();
const port = 3000;

app.set ("view engine", "hbs")

app.use(express.static ("assets"))

// HOME
app.get("/", (req, res) => {
  res.render("index");
});

// // CONTACT ME
// app.get("/", (req, res) => {
//   res.render("contact");
// });

// BLOG
app.get("/", (req, res) => {
  res.render("blog");
});





// REQUEST PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Halo, ini halaman tentang ${id}`);
});

// REQUEST QUERY
app.get("/blog", (req, res) => {
  const { title, author, year } = req.query;
  res.send(`ini halaman blog ${title} dengan author ${author} tahun ${year}`);
});

app.listen(port, () => {
  console.log(`My personal web app listening on port ${port}`);
});
