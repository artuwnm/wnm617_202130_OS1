


// Document Ready
$(()=>{

   checkUserId();

   $(document)


   .on("pagecontainerbeforeshow", function(event, ui) {
      console.log(ui.toPage[0].id)

      $(".active").removeClass("active")

      // PAGE ROUTING
      switch(ui.toPage[0].id) {
         case "recent-page": RecentPage(); break;
         case "list-page": ListPage(); break;
         case "user-profile-page": UserProfilePage(); break;
         case "user-edit-page": UserEditPage(); break;
         case "user-password-page": UserPasswordPage(); break;
         case "user-upload-page": UserUploadPage(); break;
         case "emotion-profile-page": EmotionProfilePage(); break;
         case "emotion-edit-page": EmotionEditPage(); break;
         case "emotion-add-page": EmotionAddPage(); break;
         case "choose-emotion-page": ChooseEmotionPage(); break;
         case "choose-location-page": ChooseLocationPage(); break;
      }
   })


   /* FORM SUBMITS */
   .on("submit","#signin-form",function(e){
      e.preventDefault();
      checkSigninForm();
   })
   .on("submit","#signup-form",function(e){
      e.preventDefault();
      checkSignupForm();
   })
   .on("submit","#signup-second-form",function(e){
      e.preventDefault();
      checkSignupSecondForm();
   })
   .on("submit","#list-search",function(e){
      e.preventDefault();
      checkSearchForm();
   })
   .on("submit","#recent-search",function(e){
      e.preventDefault();
      checkRecentSearchForm();
   })

   .on("change",".image-uploader input",function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         $(".upload-image-input").val('uploads/'+d.result);
         $(".image-uploader").css({
            "background-image":`url(uploads/${d.result})`
         });
      })
   })






   /* ANCHOR CLICKS */
   .on("click",".js-logout",function(e){
      sessionStorage.removeItem('userId');
      checkUserId();
   })
   .on("click",".emotion-jump",function(e){
      sessionStorage.emotionId = $(this).data('id');
      $.mobile.navigate("#emotion-profile-page")
   })
   .on("click",".emotion-nav a",function(e){
      let id = $(this).parent().index();
      
      $(this).parent().addClass("active")
         .siblings().removeClass("active")

      $(this)
         .closest(".emotion-nav").next().children().eq(id)
         .addClass("active")
         .siblings().removeClass("active")
   })
   .on("click",".js-choose-emotion",function(e){
      $("#location-choose-emotion")
         .html(FormSelectOptions([{id:sessionStorage.emotionId,name:"chosen"}]))
      $("#location-redirect").val(-2);
   })
   .on("click",".js-add-from-recent",function(e){
      $("#location-redirect").val(-3);
   })
   .on("click",".emotion-add-submit",function(e){
      checkEmotionAddForm();
   })
   .on("click",".emotion-edit-submit",function(e){
      checkEmotionEditForm();
   })
   .on("click",".user-edit-submit",function(e){
      checkUserEditForm();
   })
   .on("click",".user-upload-submit",function(e){
      checkUserUploadForm();
   })
   .on("click",".user-password-submit",function(e){
      checkUserPasswordForm();
   })
   .on("click",".location-add-submit",function(e){
      checkLocationAddForm();
   })
   .on("click",".emotion-delete",function(e){
      checkEmotionDelete($(this).data('id'));
   })
   .on("click",".filter",function(e){
      checkListFilter($(this).data());
   })






   /* DATA ACTIVATE */
   .on("click","[data-activate]",function(e){
      let target = $(this).data("activate");
      $(target).addClass("active");
   })
   .on("click","[data-deactivate]",function(e){
      let target = $(this).data("deactivate");
      $(target).removeClass("active");
   })
   .on("click","[data-toggle]",function(e){
      let target = $(this).data("toggle");
      $(target).toggleClass("active");
   })









   $("[data-template]").each(function(){
      let id = $(this).data("template");
      let template = $(id).html();
      $(this).html(template);
   })

});