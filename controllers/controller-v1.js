const { Sequelize, QueryTypes } = require("sequelize");

const config = require("../config/config.json");

const sequelize = new Sequelize(config.development);

let blogs = [
  {
    title: "Pasar Coding di Indonesia",
    content:
      "Pasar coding di Indonesia sedang berkembang pesat. Perkembangan tersebut sangatlah pesat dari tahun ke tahun. Banyak sekali developer-developer muda yang bermunculan di Indonesia. Mereka sangat antusias untuk belajar coding. Hal ini sangatlah positif bagi dunia teknologi di Indonesia. Kita harus mendukung mereka agar bisa menjadi developer yang handal.",
    image: "/img/blog-img.png",
    author: "Erwin Setya Pambudi",
    postedAt: new Date(
      "Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)"
    ),
  },
  {
    title: "Pasar Coding di Singapura",
    content:
      "Pasar coding di Indonesia sedang berkembang pesat. Perkembangan tersebut sangatlah pesat dari tahun ke tahun. Banyak sekali developer-developer muda yang bermunculan di Indonesia. Mereka sangat antusias untuk belajar coding. Hal ini sangatlah positif bagi dunia teknologi di Indonesia. Kita harus mendukung mereka agar bisa menjadi developer yang handal.",
    image: "/img/blog-img.png",
    author: "Erwin Setya Pambudi",
    postedAt: new Date(
      "Fri July 28 2024 18:15:00 GMT+0700 (Western Indonesia Time)"
    ),
  },
];

async function renderBlog(req, res) {
  // melakukan proses pengolahan data secara manual
  const blogs = await sequelize.query(
    `SELECT * FROM "Blogs" ORDER BY "createdAt" DESC`,
    {
      type: QueryTypes.SELECT,
    }
  );
  res.render("blog-list", { blogs: blogs });
}
async function renderBlogDetail(req, res) {
  const id = req.params.id;
  const query = `SELECT * FROM "Blogs" WHERE id = ${id}`;

  const blogYangDipilih = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
  res.render("blog-detail", { blog: blogYangDipilih[0] });
}

async function createBlog(req, res) {
  const { title, content } = req.body;
  console.log("judulnya", title);
  console.log("isinya", content);

  let image = "https://picsum.photos/200/120";
  let query = `INSERT INTO "Blogs" (title, content,image)
    VALUES ('${title}', '${content}', '${image}')`;

  const newBlog = await sequelize.query(query, {
    type: QueryTypes.INSERT,
  });

  // blogs.push(newBlog);

  res.redirect("/blog");
}

async function updateBlog(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;
  console.log("judulnya baru", title);
  console.log("isinya baru", content);

  const query = `UPDATE "Blogs" 
                 SET title = '${title}', content = '${content}' WHERE id = ${id}`;

  const updateResult = await sequelize.query(query, {
    type: QueryTypes.UPDATE,
  });

  console.log(updateResult);
  // let image = "https://picsum.photos/200/120";

  // let updatedBlog = {
  //   title: title,
  //   content: content,
  //   image: image,
  //   author: "Erwin Setya Pambudi",
  //   postedAt: new Date(),
  // };
  // blogs[id] = updatedBlog;
  res.redirect("/blog");
}

async function renderBlogEdit(req, res) {
  const id = req.params.id;
  const query = `SELECT * FROM "Blogs" WHERE id = ${id}`;

  const blogYangDipilih = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  res.render("blog-edit", { blog: blogYangDipilih[0] });
}

async function deleteBlog(req, res) {
  const id = req.params.id;
  const query = `DELETE FROM "Blogs" WHERE id = ${id}`;

  const deleteResult = await sequelize.query(query, {
    type: QueryTypes.DELETE,
  });

  console.log(deleteResult);

  // blogs.splice(id, 1); //array manipulation

  res.redirect("/blog");
}

module.exports = {
  renderBlog,
  createBlog,
  renderBlogDetail,
  deleteBlog,
  updateBlog,
  renderBlogEdit,
};
