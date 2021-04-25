
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