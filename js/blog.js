let blogs = [];

function addBlog(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let image = document.getElementById("image");

  let imageFileName = URL.createObjectURL(image.files[0]);

  let newBlog = {
    title: title,
    content: content,
    image: imageFileName,
    author: "Erwin Setya Pambudi",
    postedAt: new Date(),
  };

  blogs.push(newBlog);

  console.log(blogs);

  renderBlogs();
}

function renderBlogs() {
  let blogListElemen = document.getElementById("blogList");

  blogListElemen.innerHTML = firstBlogContent();

  for (let index = 0; index < blogs.length; index++) {
    console.log(blogs[index]);

    blogListElemen.innerHTML += `
    <section id="blogList" class="blog-list">
        <article class="blog-item">
            <div class="blog-item-img">
                <img src="${blogs[index].image}" alt="">
            </div>
            <div class="blog-item-text">
                <div class="blog-item-buttons">
                    <button class="blog-edit-button">Edit Blog</button>
                    <button class="blog-post-button">Post Blog</button>
                </div>
                <a href="blog-detail.html" style="text-decoration: none;">
                <h1 class="blog-item-title">${blogs[index].title}</h1></a>
                <p> ${formatDateToWIB(blogs[index].postedAt)} | ${
      blogs[index].author
    }</p>
                <p>${blogs[index].content}</p>
                <p class="blog-item-relative-time">${getRelativeTime(
                  blogs[index].postedAt
                )}</p>

            </div>
        </article>
    `;
  }
}

function firstBlogContent() {
  return `
  <article class="blog-item">
        <div class="blog-item-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEHhqMIbjhzMXUDovPR9i9utDBcMRACBpxg&s"
            alt=""
          />
        </div>
        <div class="blog-item-text">
          <div class="blog-item-buttons">
            <button class="blog-edit-button">Edit Blog</button>
            <button class="blog-post-button">Post Blog</button>
          </div>
          <a href="blog-detail.html" style="text-decoration: none;">
            <h1 class="blog-item-title">Pasar Coding di Indonesia</h1>
          </a>
          <p>30 Januari 2025 11:22 WIB | Erwin Setya Pambudi</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
            non praesentium! Illum doloremque natus ipsam laborum, suscipit eius
            repellendus expedita, architecto distinctio iste omnis, repellat
            iure accusamus obcaecati deleniti nostrum eum aspernatur! Quia optio
            itaque voluptas nulla, magnam possimus corrupti!
          </p>
          <p class="blog-item-relative-time">${getRelativeTime(
            new Date(
              "Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)"
            )
          )}</p>
        </div>
      </article>`;
}

function formatDateToWIB() {
  let date = new Date();
  // 30 Jan 2025
  let monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = monthList[date.getMonth()];
  let year = date.getFullYear();

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  let formattedDate = `${day} ${month} ${year} ${hours} : ${minutes} WIB`;

  return formattedDate;
}

function getRelativeTime(postTime) {
  let now = new Date();
  console.log("WAKTU SEKARANG:", now);
  console.log("WAKTU USER POST:", postTime);

  let diffTime = now - postTime;
  console.log("selisih waktu:", diffTime);

  let diffInSeconds = Math.floor((now - postTime) / 1000);
  console.log("selisih detik", diffInSeconds);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} second ago`;
  }

  let diffInMinutes = Math.floor(diffInSeconds / 60);

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  let diffInHours = Math.floor(diffInMinutes / 60);

  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }

  let diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays < 30) {
    return `${diffInDays} days ago`;
  }

  let diffInMonth = Math.floor(diffInDays / 30);
  return `${diffInMonth} month${diffInMonth === 1 ? "" : "s"} ago`;
}
