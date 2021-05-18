
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

   <div class="floater bottom right">
      <a href="#user-upload-page" class="icon"><img src="img/icon/pencil.svg" alt=""></a>
   </div>
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
<button class="form-button emotion-delete" data-id="${o.id}">Delete</button>
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


const FormSelectOptions = (options,selected=1) => {
   return options.reduce((r,o)=>{
      return r+`<option value="${o.id}" ${o.id===selected?'selected':''}>${o.name}</option>`
   },'');
}

const FormSelect = (options,id,selected=1) => {
   return `<div class='form-select'>
      <select id="${id}">
         ${FormSelectOptions(options,selected)}
      </select>
   </div>`;
}



const makeEmotionProfileUpdateForm = (o,namespace="emotion-edit") => `
${FormControlInput({
   namespace:namespace,
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type The Emotion Name',
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:'type',
   displayname:'Type',
   type:'text',
   placeholder:'Type The Emotion Type',
   value:o.type
})}
${FormControlInput({
   namespace:namespace,
   name:'breed',
   displayname:'Breed',
   type:'text',
   placeholder:'Type The Emotion Breed',
   value:o.breed
})}
${FormControlTextarea({
   namespace:namespace,
   name:'description',
   displayname:'Description',
   type:'text',
   placeholder:'Type The Emotion Description',
   value:o.description
})}
`



const makeUserProfileUpdateForm = (o,namespace="user-edit") => `
${FormControlInput({
   namespace:namespace,
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type Your Name',
   value:o.name
})}
${FormControlInput({
   namespace:namespace,
   name:'username',
   displayname:'Username',
   type:'text',
   placeholder:'Type Your Username',
   value:o.username
})}
${FormControlInput({
   namespace:namespace,
   name:'email',
   displayname:'Email',
   type:'text',
   placeholder:'Type Your Email',
   value:o.email
})}
`

const makeUserPasswordUpdateForm = o => `
${FormControlInput({
   namespace:"user-edit",
   name:'old-password',
   displayname:'Old Password',
   type:'password',
   placeholder:'Type Your Old Password',
   value:''
})}
${FormControlInput({
   namespace:"user-edit",
   name:'new-password',
   displayname:'New Password',
   type:'password',
   placeholder:'Type Your New Password',
   value:''
})}
${FormControlInput({
   namespace:"user-edit",
   name:'confirm-password',
   displayname:'Confirm Password',
   type:'password',
   placeholder:'Type Your New Password Again',
   value:''
})}
`





const makeEmotionListSet = (emotions,missing_text="") => {
   emotion_template = emotions.length?
      makeEmotionList(emotions):
      `<div class="emotionlist-item"><div class="emotionlist-description">${missing_text}</div></div>`

   $("#list-page .emotionlist").html(emotion_template);
}

const capitalize = s => s[0].toUpperCase()+s.substr(1);

const filterList = (emotions,type) => {
   let a = [...(new Set(emotions.map(o=>o[type])))];
   return templater(o=>o?`<li class="filter" data-field="${type}" data-value="${o}">${capitalize(o)}</li>`:'')(a);
}

const makeFilterList = (emotions) => {
   return `
   <li class="filter" data-field="type" data-value="">All</li>
   |
   ${filterList(emotions,'type')}
   |
   ${filterList(emotions,'breed')}
   `
}