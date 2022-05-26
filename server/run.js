const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')
const bookSchema = require('./schemas/player-schema')
const orderSchema = require('./schemas/team-schema')

var api = require('./api.js').app;

api.put('/message', function(request, response) {
console.log(request.body);
});

api.put('/register', async function (request, response) {
  await mongo().then(async (mongoose) => {
    try {
      console.log("server")
      console.log(request.body)
      
      const user = {
          username: request.body.username,
          password: request.body.password,
          isAdmin: request.body.isAdmin
      }

      const result = await new userSchema(user).save()
      response.json(result)
    } finally {
        mongoose.connection.close()
    }
})
});

api.put('/login', async function (request, response) {
  await mongo().then(async (mongoose) => {
    try {
      console.log("server")
      console.log(request.body)
      
      const resultUser = await userSchema.findOne({
          username: request.body.username,
          password: request.body.password,
      })

      console.log(resultUser.isAdmin)
      if (resultUser)
        if (resultUser.isAdmin == true)
          response.json(1);
        else response.json(2);
      else response.json(0);
    } finally {
        mongoose.connection.close()
    }
})
});

api.put('/createTeam', async function (request, response) {
  await mongo().then(async (mongoose) => {
    try {
      console.log("server")
      console.log(request.body)
      
      const team = {
          id: request.body.id,
          name: request.body.name,
          style: request.body.style
      }

      const result = await new teamSchema(team).save()
      response.json(result)
    } finally {
        mongoose.connection.close()
    }
})
});

api.put('/createPlayer', async function (request, response) {
  await mongo().then(async (mongoose) => {
    try {
      console.log("server")
      console.log(request.body)
      
      const player = {
        id: request.body.id,
        teamId: request.body.teamId,
        position: request.body.id,
        age: request.body.age,
        marketValue: request.body.marketValue,
        name: request.body.name,
        surname: request.body.surname
      }

      const result = await new playerSchema(player).save()
      response.json(result)
    } finally {
        mongoose.connection.close()
    }
})
});

api.listen(3000, function(){
  console.log('CORS-enabled web server is listening on port 3000...');
});
    

