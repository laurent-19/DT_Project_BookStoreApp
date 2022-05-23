const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')
const bookSchema = require('./schemas/book-schema')
const orderSchema = require('./schemas/order-schema')

var api = require('./api.js').app;

const connectToMongoDB = async (username,password) => {
  await mongo().then(async (mongoose) => {
      try {
          console.log("connected to MongoDB");

          const result = await userSchema.find({
              username: username,
              password: password,
          })

          console.log('Result: ', result)
      } finally {
          mongoose.connection.close()
      }
  })
}

api.put('/message', function(request, response) {
console.log(request.body);
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

      console.log(resultUser)

      if(resultUser)
        response.json("true");
      else
        response.json("false")
    } finally {
        mongoose.connection.close()
    }
})
});

api.listen(3000, function(){
  console.log('CORS-enabled web server is listening on port 3000...');
});
    

