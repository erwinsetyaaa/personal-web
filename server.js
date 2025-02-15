const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const methodOverride = require("method-override");

const {
  // renderBlog,
  // renderBlogDetail,
  createBlog,
  updateBlog,
  // deleteBlog,
  renderBlogEdit,
} = require("./controllers/controller-v1");

const {
  renderBlog,
  renderBlogDetail,
  deleteBlog,
} = require("./controllers/controller-v2");

const { formatDateToWIB, getRelativeTime } = require("./utils/time");

const port = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use(methodOverride("_method"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});

hbs.registerHelper("equal", function (a, b) {
  return a === b;
});

hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);

// HOME
app.get("/", (req, res) => {
  res.render("index");
});

// CONTACT ME
app.get("/contact", (req, res) => {
  res.render("contact");
});

// BLOG LIST
app.get("/blog", renderBlog);

// RENDER CREATE BLOG PAGE
app.get("/blog-create", (req, res) => {
  res.render("blog-create");
});

// SUBMIT NEW BLOG
app.post("/blog-create", createBlog);

// RENDER EDIT BLOG PAGE
app.get("/blog-edit/:id", renderBlogEdit);

// DELETE EXISTING BLOG
app.delete("/blog/:id", deleteBlog);

// SUBMIT/SAVE EDIT BLOG
app.patch("/blog-update/:id", updateBlog);

// BLOG DETAIL
app.get("/blog/:id", renderBlogDetail);

// TESTIMONIALS
app.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

app.get("*", (req, res) => {
  res.render("page-404");
});

app.listen(port, () => {
  console.log(`My personal web app listening on port ${port}`);
});
