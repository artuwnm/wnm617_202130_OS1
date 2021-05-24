//https://www.json-generator.com/
//https://konbert.com/convert

// locations template

[
  '{{repeat(250)}}',
  {
    id: '{{index(1)}}',
    emotion_id: '{{integer(1,50)}}',
    
    lat: '{{floating(37.800351, 37.701135)}}',
    lng: '{{floating(-122.511433, -122.386382)}}',
    
    description: '{{lorem(3,"sentences")}}',
    photo: 'https://via.placeholder.com/400/',
    icon: 'https://via.placeholder.com/400/?text=ICON',
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]

// emotions template

// [
//   '{{repeat(50)}}',
//   {
//   id: '{{index(1)}}',
//     user_id: '{{integer(1,10)}}',
//     name: '{{company()}}',
//     photo: function(tags) {
//    return 'https://via.placeholder.com/400/'+
//    tags.integer(700,999) + '/fff/?text=' +
//     this.username;
//   },
    
//     type: '{{random("Unknown","Happy", "Sad", "Disgusted", "Angry", "Fearful", "Bad", "Surprised")}}',
//     breed: function(tags) {
//       var breeds = {
//         Unknown:[],
//         Happy:["playful","content","interested","proud","accepted","powerful","peaceful","trusting","optimistic"],
//         Sad:["lonely","vulnerable", "despair","guilty","depressed","hurt"],
//         Disgusted:["repelled","Awful","disappointed","disapproving"],
//         Angry:["let down","humilliated","bitter","mad","aggressive","frustrated","distant","critical"],
//         Fearful:["scared","anxious","insecure","weak","rejected","threatened"],
//         Bad:["bored","busy","stressed","tired"],
//         Surprised:["startied","confused","amazed","excited"]
//       };
//       var chosen_type = breeds[this.type];
//       var chosen_index = tags.integer(0,chosen_type.length-1);
//       return chosen_type[chosen_index];
//       },
      
//       MyStory: '{{lorem(3,"sentences")}}',
//       My_reaction: '{{lorem(3,"sentences")}}',
  
      
  
//   date_create: '{{date(new Date(2020,0,1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
    
//   }
  
// ]

// EMOTIONS DATA
[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    user_id: '{{integer(1,10)}}',
    
    name: '{{company()}}',
    
    type: '{{random(“Unknown","Happy","Surprised","Sad","bad","Fearful","Angry","Disgusted")}}',
    breed: function(tags) {
      var breeds = {
        Unknown:["Unknown"],
        Happy:["Playful","Content","Interested","Proud","Accepted","Powerful","Peaceful","Trusting","Optimistic"],
        Surprised:["Startled","Confused","Amazed","Excited"],
        Sad:["Lonely","Vulnerable","Despair","Guilty","Depressed","Hurt"],
        Bad:["Bored","Busy","Stressed","Tired"],
        Fearful:["Scared","Anxious","Insecure","Weak","Rejected","Threatened"],
        Angry:["Let down","Humilliated","Bitter","Mad","Aggressive","Frustrated","Distant","Critical"],
        Disgusted:["Disapproving","Disappointed","Awful","Repelled"]
      };
      var chosen_type = breeds[this.type];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
    
    description: '{{lorem(3,"sentences")}}',
    img:function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999) + '/fff/?text=' + this.name;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]


// users template

[
  '{{repeat(10)}}',
  {
  id: '{{index(1)}}',
  name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user' + this.id;
    
    },
    email: function() {
      return this.username + '@gmail.com';
    },
    password: 'md5(pass)',
    img: function(tags) {
   return 'https://via.placeholder.com/400/'+
   tags.integer(700,999) + '/fff/?text=' +
    this.username;
  },
    date_create: '{{date(new Date(2020,0,1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  
  }
  
]

// original template

[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
]