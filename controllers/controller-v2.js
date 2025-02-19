const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const config = require("../config/config.json");
const { Blog, User } = require("../models");

const sequelize = new Sequelize(config.development);

const saltRounds = 10;

async function renderHome(req, res) {
  const user = req.session.user;
  console.log("usernya adalah", user);
  res.render("index", { user: user });
}

async function authLogin(req, res) {
  const { email, password } = req.body;

  console.log(`yang mau login, ${email}, ${password}`);
  console.log(req.body);

  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  // ngecek user ada atau kagak
  if (!user) {
    req.flash("error", "User tidak ditemukan.");
    return res.redirect("/login");
  }
  console.log("usernya adalah", user);

  // cek kalo pass salah
  const isValidated = await bcrypt.compare(password, user.password); //return sebuah boolean true atau false

  if (!isValidated) {
    req.flash("error", "Password salah.");
    return res.redirect("/login");
  }

  let loggedInUser = user.toJSON(); //convert dari object sequelize ke object biasa

  delete loggedInUser.password; //menghapus properti password

  req.session.user = loggedInUser;

  req.flash("success", `Selamat datang, ${loggedInUser.name}`);
  res.redirect("/");
}
async function authRegister(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  if (password != confirmPassword) {
    req.flash("error", "Password dan Confirm Password Tidak Sesuai.");
    return res.redirect("/register");
  }

  // check apakah menggunakan email yang sama atau yang dipakai
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (user) {
    req.flash("error", "Email sudah terpakai.");
    return res.redirect("/register");
  }

  console.log(req.body);

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = {
    name: name,
    email: email,
    password: hashedPassword,
  };
  const userInsert = await User.create(newUser);

  req.flash("success", "Berhasil register. Silahkan login.");

  res.redirect("/login");
}
async function renderBlog(req, res) {
  const blogs = await Blog.findAll({
    order: [["createdAt", "DESC"]],
  });

  console.log("hasil dari v2", blogs);
  res.render("blog-list", { blogs: blogs });
}

async function authLogout(req, res) {
  // hapus user dari session
  req.session.user = null;
  res.redirect("/login");
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
  authLogin,
  authRegister,
  renderHome,
  authLogout,
};
