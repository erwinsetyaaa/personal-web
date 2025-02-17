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

async function renderBlogCreate(req, res) {
  res.render("blog-create");
}

async function createBlog(req, res) {
  const { title, content } = req.body;
  console.log("judulnya", title);
  console.log("isinya", content);

  let image = "https://picsum.photos/200/120";

  const newBlog = {
    title: title,
    content: content,
    image: image,
  };

  const resultSubmit = await Blog.create(newBlog);

  res.redirect("/blog"); //url / (bukan nama file)
}

async function renderBlogEdit(req, res) {
  const id = req.params.id;

  const blogYangDipilih = await Blog.findOne({
    where: {
      id: id,
    },
  });
  if (blogYangDipilih === null) {
    res.render("page-404");
  } else {
    console.log("v2 = blog yang dipilih", blogYangDipilih);
    res.render("blog-edit", { blog: blogYangDipilih });
  }
}

async function updateBlog(req, res) {
  //apa yang dilakukan ketika di save
  const id = req.params.id;
  const { title, content } = req.body;
  console.log("judulnya", title);
  console.log("isinya", content);

  const updateResult = await Blog.update(
    {
      //form edit

      title,
      content,
      updatedAt: sequelize.fn("NOW"),
    },
    {
      //where clause atau filter yang mana yang mau diedit
      where: {
        id: id,
      },
    }
  );
  console.log("result update", updateResult);
  res.redirect("/blog");
}

module.exports = {
  renderBlog,
  renderBlogDetail,
  deleteBlog,
  renderBlogCreate,
  createBlog,
  renderBlogEdit,
  updateBlog,
};
