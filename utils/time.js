function formatDateToWIB(date) {
//   let date = new Date();
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

module.exports = {
  formatDateToWIB,
  getRelativeTime,
};
