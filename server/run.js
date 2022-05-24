const mongo = require('./mongo')
const userSchema = require('./schemas/user-schema')
const bookSchema = require('./schemas/book-schema')
const orderSchema = require('./schemas/order-schema')

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
          email: request.body.email,
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

      console.log(resultUser)
      if (resultUser)
        if (resultUser.isAdmin == true)
          response.json("admin")
        else
          response.json("browse")
      else
        response.json("")
    } finally {
        mongoose.connection.close()
    }
})
});

api.put('/createBook', async function (request, response) {
  await mongo().then(async (mongoose) => {
    try {
      console.log("server")
      console.log(request.body)
      
      const book = {
          name: request.body.name,
          description: request.body.description,
          image: request.body.image,
          price: request.body.price,
          quantity: request.body.quantity
      }

      const result = await new bookSchema(book).save()
      response.json(result)
    } finally {
        mongoose.connection.close()
    }
})
});

api.put('/createOrder', async function (request, response) {
  await mongo().then(async (mongoose) => {
    try {
      console.log("server")
      console.log(request.body)
      
      const order = {
          userId: request.body.userId,
          bookId: request.body.bookId,
          time: request.body.time,
      }

      const result = await new orderSchema(order).save()
      response.json(result)
    } finally {
        mongoose.connection.close()
    }
})
});

api.listen(3000, function(){
  console.log('CORS-enabled web server is listening on port 3000...');
});
    

