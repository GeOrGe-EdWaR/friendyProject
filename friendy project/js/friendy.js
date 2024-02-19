// dark mode function
let darkMode = document.getElementsByClassName("darkMode")[0];
let myform = document.getElementById("myForm");
let nav = document.getElementsByClassName("navbar")[0];
let logo = document.getElementsByClassName("logo")[0];
let icon = document.getElementsByClassName("darkMode")[0];
let sidebar = document.getElementsByClassName("sideBar")[0];
let btn = document.getElementsByClassName("loginbtn")[0];
//darkmode

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-Mode");
  nav.classList.toggle("dark-Mode");
  sidebar.classList.toggle("dark-Mode");
});

// email validation

if (myform) {
  btn.addEventListener("click", () => {
    let email = document.querySelector(".Email-valid").value;
    let password = document.querySelector(".Password-valid").value;

    if (email === "") {
      alert("Please enter an email");
      console.log;
    }

    if (password === "") {
      alert("Please enter a password");
    }
  });
} else {
}
// // publish post

// //create and catch the inputs
// let nameinput = document.getElementsByClassName("name-input")[0];
// let postinput = document.getElementsByClassName("post-input")[0];
// let postbtn = document.getElementsByClassName("post-button")[0];

// //append name and post value in js
// let post = `<div class="post">
// <div class="post-header">
//   <img src="/imgs/956.jpg" alt="User Avatar" class="user-avatar" />
//   <div class="user-info">
//     <h3 class="user-name">${nameinput.value}</h3>
//     <p class="post-time">2 hours ago</p>
//   </div>
// </div>
// <div class="post-content">
//  ${postinput.value}
// </div>
// <div class="post-actions">
//   <button class="like-button">Like</button>
//   <button class="comment-button">Comment</button>
//   <button class="share-button">Share</button>
// </div>
// </div>`;

// postbtn.addEventListener("click", () => {
//   post.appendChild(nameinput.value);
//   post.appendChild(postinput.value);
// });
