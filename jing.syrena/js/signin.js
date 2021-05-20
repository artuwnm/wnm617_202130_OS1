const checkSigninForm = async () => {
   let username = $("#signin-username").val();
   let password = $("#signin-password").val();

   if(username=='' || password=='') {
      // warn that not all information is there
      return;
   }

   let user = await query({
      type:'check_signin',
      params:[username,password]
   });

   if(user.result.length > 0) {
      console.log("logged in")
      sessionStorage.userId = user.result[0].id;

      $("#signin-form")[0].reset();
   } else {
      console.log("logged out")
      sessionStorage.removeItem("userId");
   }

   checkUserId();
}


const checkUserId = () => {
   let p = ["#signin-page","#signup-page","#signup-second-page",""];

   if(sessionStorage.userId === undefined) {
      // not logged in
      if(!p.some(o=>window.location.hash===o))
         $.mobile.navigate("#signin-page");
   } else {
      // logged in
      if(p.some(o=>window.location.hash===o))
         $.mobile.navigate("#recent-page");
   }
}



//change background color in signin-page, signup-page, signup-second page
// setInterval(
// function () {
//   var randomColor = Math.floor(Math.random()*12512512).toString(16);
//   document.body.style.backgroundColor = "#"+randomColor;
// },2000);
var i = 0;
function change() {
  var doc = document.getElementById("signin-page");
  var color = ["#E9B0B9", "#D9BAC5", "#D3D4E5", "#CBD7EC", "#B6CEED","#CBD7EC","#D3D4E5", "#D9BAC5"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 2000);

var n = 0;
function change2() {
  var doc = document.getElementById("signup-page");
  var color = ["#E9B0B9", "#D9BAC5", "#D3D4E5", "#CBD7EC", "#B6CEED","#CBD7EC","#D3D4E5", "#D9BAC5"];
  doc.style.backgroundColor = color[n];
  n = (n + 1) % color.length;
}
setInterval(change2, 2000);

var n = 0;
function change2() {
  var doc = document.getElementById("signup-page");
  var color = ["#E9B0B9", "#D9BAC5", "#D3D4E5", "#CBD7EC", "#B6CEED","#CBD7EC","#D3D4E5", "#D9BAC5"];
  doc.style.backgroundColor = color[n];
  n = (n + 1) % color.length;
}
setInterval(change2, 2000);

var m = 0;
function change3() {
  var doc = document.getElementById("signup-second-page");
  var color = ["#E9B0B9", "#D9BAC5", "#D3D4E5", "#CBD7EC", "#B6CEED","#CBD7EC","#D3D4E5", "#D9BAC5"];
  doc.style.backgroundColor = color[n];
  m = (m + 1) % color.length;
}
setInterval(change3, 2000);

