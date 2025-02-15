const { Sequelize } = require("sequelize");

const config = require("../config/config.json");
const { Blog } = require("../models");

const sequelize = new Sequelize(config.development);

async function renderBlog(req, res) {
  const blogs = await Blog.findAll({
    order: [["createdAt", "DESC"]],
  });

  console.log("hasil dari v2", blogs);
  res.render("blog-list", { blogs: blogs });
}

async function renderBlogDetail(req, res) {
  const id = req.params.id;

  // tipe data nya adalah object bukan array
  const blogYangDipilih = await Blog.findOne({
    where: {
      id: id,
    },
  });

  if (blogYangDipilih === null) {
    res.render("page-404");
  } else {
    console.log("v2 = blog yang dipilih", blogYangDipilih);
    res.render("blog-detail", { blog: blogYangDipilih });
  }

  // console.log("v2 = blog yang dipilih", blogYangDipilih );

  res.render("blog-detail", { blog: blogYangDipilih });
}

async function deleteBlog(req, res) {
  const id = req.params.id;
  const deleteResult = await Blog.destroy({
    where: {
      id: id,
    },
  });
  console.log("result delete", deleteResult);

  res.redirect("/blog");
}

async function renderBlogCreate(req, res) {}
async function createBlog(req, res) {}

async function renderBlogEdit(req, res) {}

async function updateBlog(req, res) {}
module.exports = { renderBlog, renderBlogDetail, deleteBlog };
