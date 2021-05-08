
const checkSignupForm = () => {
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let confirm = $("#signup-confirm").val();

   if(password!==confirm) {
      throw "Passwords don't match";
      return;
   } else {
      query({
         type:"insert_user",
         params:[email,password]
      }).then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d)
         sessionStorage.userId = d.id;
         $("#signup-form")[0].reset();
         $.mobile.navigate("#signup-second-page");
      })
   }
}

const checkSignupSecondForm = () => {
   let username = $("#signup-second-username").val();
   let name = $("#signup-second-name").val();

   query({
      type:"update_user_initial",
      params:[username,name,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(d)
      $("#signup-second-form")[0].reset();
      $.mobile.navigate("#recent-page");
   })
   
}
const checkUserEditForm = () => {
   let username = $("#user-edit-username").val();
   let name = $("#user-edit-name").val();
   let email = $("#user-edit-email").val();

   query({
      type:"update_user",
      params:[username,name,email,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-1);
   })
}
const checkUserPasswordForm = () => {
   let oldpassword = $("#user-edit-old-password").val();
   let password = $("#user-edit-new-password").val();
   let confirm = $("#user-edit-confirm-password").val();

   if(password!==confirm)
      throw "New Passwords don't match";
   query({
      type:"update_user_password",
      params:[password,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-1);
   })
}







const checkEmotionAddForm = () => {
   let name = $("#emotion-add-name").val();
   let type = $("#emotion-add-type").val();
   let breed = $("#emotion-add-breed").val();
   let description = $("#emotion-add-description").val();

   query({
      type:"insert_emotion",
      params:[sessionStorage.userId,name,type,breed,description]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(d)
      $("#emotion-add-form")[0].reset();
      sessionStorage.emotionId = d.id;
      window.history.go(-1);
   })
}
const checkEmotionEditForm = () => {
   let name = $("#emotion-edit-name").val();
   let type = $("#emotion-edit-type").val();
   let breed = $("#emotion-edit-breed").val();
   let description = $("#emotion-edit-description").val();

   query({
      type:"update_emotion",
      params:[name,type,breed,description,sessionStorage.emotionId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-1);
   })
}





const checkLocationAddForm = () => {
   let emotion_id = $("#location-choose-emotion").val();
   let lat = +$("#location-lat").val();
   let lng = +$("#location-lng").val();
   let description = $("#location-description").val();

   query({
      type:"insert_location",
      params:[emotion_id,lat,lng,description]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(+$("#location-redirect").val());
   })
}