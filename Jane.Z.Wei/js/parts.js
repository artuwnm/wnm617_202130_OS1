
const makeEmotionList = templater(o=>`
<div class="emotionlist-item display-flex emotion-jump" data-id="${o.id}">
   <div class="flex-none emotionlist-image"><img src="${o.img}" alt=""></div>
   <div class="emotionlist-description flex-stretch">
      <div class="emotionlist-name">${o.name}</div>
      <div class="emotionlist-info">${o.type}, ${o.breed}</div>
   </div>
   
</div>
`);


const makeUserProfile = o => `
<div class="user-profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="user-profile-description">
   <div class="user-profile-name">${o.name}</div>
   <div class="user-profile-email">${o.email}</div>
</div>
`;

const makeEmotionInfo = o => `
<div class="emotion-name">${o.name}</div>
<div class="emotion-type">${o.type}</div>
<div class="emotion-breed">${o.breed}</div>
`;




const makeEmotionPopup = o => `
<div class="display-flex emotion-jump" data-id="${o.emotion_id?o.emotion_id:o.id}">
   <div class="flex-none emotion-image-thumb">
      <img src="${o.img}">
   </div>
   <div class="flex-none" style="padding:1em">
      <div class="emotion-name">${o.name}</div>
      <div class="emotion-type">${o.type}</div>
      <div class="emotion-breed">${o.breed}</div>
   </div>
</div>
`;




// destructuring
const FormControlInput = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <input class="form-input" type="${type}" id="${namespace}-${name}" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}
const FormControlTextarea = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <textarea class="form-input" id="${namespace}-${name}" data-role="none" placeholder="${placeholder}">${value}</textarea>
   </div>`;
}



const makeEmotionProfileUpdateForm = o => `
${FormControlInput({
   namespace:"emotion-edit",
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type The Emotion Name',
   value:o.name
})}
${FormControlInput({
   namespace:"emotion-edit",
   name:'type',
   displayname:'Type',
   type:'text',
   placeholder:'Type The Emotion Type',
   value:o.type
})}
${FormControlInput({
   namespace:"emotion-edit",
   name:'breed',
   displayname:'Breed',
   type:'text',
   placeholder:'Type The Emotion Breed',
   value:o.breed
})}
${FormControlTextarea({
   namespace:"emotion-edit",
   name:'description',
   displayname:'Description',
   type:'text',
   placeholder:'Type The Emotion Description',
   value:o.description
})}
`



const makeUserProfileUpdateForm = o => `
${FormControlInput({
   namespace:"user-edit",
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type Your Name',
   value:o.name
})}
${FormControlInput({
   namespace:"user-edit",
   name:'username',
   displayname:'Username',
   type:'text',
   placeholder:'Type Your Username',
   value:o.username
})}
${FormControlInput({
   namespace:"user-edit",
   name:'email',
   displayname:'Email',
   type:'text',
   placeholder:'Type Your Email',
   value:o.email
})}
`

const makeUserPasswordUpdateForm = o => `
${FormControlInput({
   namespace:"user-password",
   name:'old-password',
   displayname:'Old Password',
   type:'password',
   placeholder:'Type Your Old Password',
   value:''
})}
${FormControlInput({
   namespace:"user-password",
   name:'new-password',
   displayname:'New Password',
   type:'password',
   placeholder:'Type Your New Password',
   value:''
})}
${FormControlInput({
   namespace:"user-password",
   name:'confirm-password',
   displayname:'Confirm Password',
   type:'password',
   placeholder:'Type Your New Password Again',
   value:''
})}
`