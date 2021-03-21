const db = require("../models");
const cloudinary = require("cloudinary").v2;

// cloudinary configuration

cloudinary.config({
  cloud_name: "testing-mctc-project",
  api_key: "591627645258192",
  api_secret: "38izIqLk7vqZhs9MLVGj3aRqBx0"
});

module.exports = function(app) {

  /////////////////////////////////////////////////////////////////////// become a host feature

  // persist image
app.post("/become_a_host", (request, response) => {
  // collected image from a user
  const data = {
    image: request.body.image,
    room_space : request.body.room_space,
    status: request.body.occupied,
    guest_or_host:request.body.host
  }
  //console.log('connected user: ',connectedId)
  //console.log('post request sent to cloudinary')
 // console.log('data.image here',data.image)
  // upload image here
  cloudinary.uploader.upload(data.image)
  .then((image) => {
    //console.log('cloudinary stored it successfully')
////////////// console.log the loged in user id
    db.users.update(
      {room_picture: image.secure_url,
      status:data.status,
      room_space:data.room_space,
      guest_or_host:'host'},
      { where: { id: connectedId } }) //// change id value with thisUserid later
      .then(result =>{
        response.send(result)
      })
      .catch(err =>{
        console.log('error')
      })
//////////
  }).catch((error) => {
    response.status(500).send({
      message: "db connection failure",
      error,
    });
  });
});


/////////////////////////////////////////////////////////////////////// search feature

app.post('/search', function(request, response) {

 // console.log('/search request body',Object.entries(request.body))
  let conditions = Object.entries(request.body).filter(x=>(x[1]!=='')) // keeping just the changed input 
   // updating the filterBy based on the conditions

  let filterBy = {status : 'occupied'}

  for(var ele of conditions) {
    filterBy[ele[0]] = ele[1]
  }

  let query = {}

  query.where = filterBy
  query.attributes = ['id','username','gender','age','nationality','profile_picture','room_space','contact','room_picture']
 // console.log("query.attributes",query.attributes)


//////////////// return the number of documents satisfy the query

db.users.findAndCountAll(query).then(data => {
     // console.log('searching results',data)
      response.send(data)
    }).catch(err => {
     // console.log('searching failed')
      response.send(err)
    });
  })
  /////////////////////////////////////////////////////////////////////////
  app.post('/current_user', function(request, response) {
//console.log('req',request.body)    
    
    
    const project =  db.users.findOne({ where: {email:request.body.email} })
    .then(data => {
      //console.log('current_user',data)
      response.send(data)
    }).catch(err => {
     // console.log('searching failed')
      response.send(err)
    });

  })

/////////////////////////////////////////////////////////////////////// add a contact to the favourite contacts list 

app.post('/add_favourite', function(request, response) {

  const favouriteUser = {
    userId : request.body.userId,
    favourite_user_id:request.body.favId
  }
  console.log('connectedId: ',favouriteUser.userId)
  console.log('favourite host: ',favouriteUser.favourite_user_id)

  db.favourite_hosts.create({
    user_id: favouriteUser.userId,
    favourite_user_id : favouriteUser.favourite_user_id
  })
    .then(()=>{
      response.send({ message: "Contact added successfully to favourite contacts list" })
    })
    .catch(err => {
      response.status(500).send({ message: err.message });
    });
  })


  /////////////////////////////////////////////////////////////////////// remove a contact to the favourite contacts list 

app.post('/remove_favourite', function(request, response) {

  const favouriteUser = {
    id : request.body.favouriteUserId
  }
  console.log('connectedId: ',connectedId)
  console.log('favourite host: ',favouriteUser.id)
  db.favourite_hosts.destroy({
    where: {
      user_id: connectedId,
      favourite_user_id : favouriteUser.id
      }
})
    .then(()=>{
      response.send({ message: "Contact removed successfully from favourite contacts list" })
    })
    .catch(err => {
      response.status(500).send({ message: err.message });
    });
  })

/////////////////////////////////////////////////////////////////////// display favourite contacts list 

app.post('/display_favourite', function(request, response) {
  console.log('connectedId: ',request.body.currentId)
  let queryStr = 'SELECT * FROM users WHERE age = 25'
  db.favourite_hosts.findAll({ where: {user_id:request.body.currentId} })
  .then((res)=>{
    console.log('favvvvvvvvvv',res)
        response.send(res)
      })
  .catch(err => {
        response.status(500).send({ message: err.message });
      })
  })

//////////////////////////////////////////////////////////

app.post("/edit_profile", async (req, res) => {
  console.log("picture from ui ", req.body.profile_picture);
  // if (req.body.profile_picture) {
  //   const profile_picture = await cloudinary.uploader.upload(
  //     req.body.profile_picture
  //   );
  // }
  // console.log("message of profile_picture", profile_picture);
  let arr = Object.entries(req.body);
  let arr1 = arr.filter((el) => {
    return (
      el[0] == "room_space" ||
      el[0] == "guest_or_host" || 
      el[0] == "nationality" ||
      el[0] == "contact" ||
      el[0] == "status"
    );
  });
  // arr1.splice(arr1.length - 2, 0, [
  //   ["profile_picture", profile_picture.secure_url],
  // ]);
  let es = {};
  arr1.forEach((element) => {
    es[element[0]] = element[1];
  });
  //console.log(es);

  db.users.update(es, { where: { id: connectedId } });
  res.send("message sent");
});

};


