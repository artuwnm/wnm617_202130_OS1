
const RecentPage = async () => {
   let locations = await query({
      type:'recent_locations',
      params:[sessionStorage.userId]
   });
   console.log(locations)

   let valid_emotions = locations.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[]);

   let map_el = await makeMap("#recent-page .map");
   makeMarkers(map_el,valid_emotions);

   map_el.data("markers").forEach((o,i)=>{
      o.addListener("click",function(){

         /* SIMPLE EXAMPLE */
         /*sessionStorage.emotionId = valid_emotions[i].emotion_id;
         $.mobile.navigate("#emotion-profile-page");*/

         /* INFOWINDOW EXAMPLE */
         /*map_el.data("infoWindow")
            .open(map_el.data("map"),o)
         map_el.data("infoWindow")
            .setContent(makeEmotionPopup(valid_emotions[i]))*/

         /* ACTIVATE EXAMPLE */
         $("#recent-drawer")
            .addClass("active")
            .find(".modal-body")
            .html(makeEmotionPopup(valid_emotions[i]))
      })
   })
}







const ListPage = async () => {
   let emotions = await query({
      type:'emotions_by_user_id',
      params:[sessionStorage.userId]
   });

   console.log(emotions)

   emotion_template = emotions.result.length?
      makeEmotionList(emotions.result):
      `<div class="emotionlist-item"><div class="emotionlist-description">No emotions yet. Try adding some.</div></div>`

   $("#list-page .emotionlist").html(emotion_template);
}







const UserProfilePage = async () => {
   let user = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   });

   $("#user-profile-page .profile")
      .html(makeUserProfile(user.result[0]));
}

const UserEditPage = async () => {
   let user = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   });

   $("#user-edit-form")
         .html(makeUserProfileUpdateForm(user.result[0]));
}

const UserPasswordPage = async () => {
   let user = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   });

   $("#user-password-form")
         .html(makeUserPasswordUpdateForm(user.result[0]));
}







const EmotionProfilePage = async () => {
   query({
      type:'emotion_by_id',
      params:[sessionStorage.emotionId]
   }).then(r=>{
      let emotion = r.result[0];
      console.log("EMOTION DATA", emotion)

      if(!$("#emotion-profile-page .active").length) {
         $("#emotion-profile-page .emotion-nav li:first-child").addClass("active")
         $("#emotion-profile-page .emotion-bottom-section:first-child").addClass("active")
      }

      $("#emotion-profile-page .emotion-top")
         .css({backgroundImage:`url(${emotion.img})`})
      $("#emotion-profile-page .emotion-info")
         .html(makeEmotionInfo(emotion));
   });
   

   query({
      type:'locations_by_emotion_id',
      params:[sessionStorage.emotionId]
   }).then(async (r)=>{
      console.log("EMOTION LOCATIONS", r.result)
      let map_el = await makeMap("#emotion-profile-page .map");
      makeMarkers(map_el,r.result)
   });
}

const EmotionEditPage = async () => {
   let emotion = await query({
      type:'emotion_by_id',
      params:[sessionStorage.emotionId]
   });

   $("#emotion-edit-form")
         .html(makeEmotionProfileUpdateForm(emotion.result[0]));
}





const ChooseLocationPage = async () => {
   let map_el = await makeMap("#choose-location-page .map");
   makeMarkers(map_el,[])
}