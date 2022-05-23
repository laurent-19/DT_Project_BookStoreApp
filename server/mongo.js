const { default: mongoose } = require('mongoose')
const mongos = require('mongoose')
const mongoPath = 'mongodb+srv://admin:admin1234@mongodb.mouwb.mongodb.net/DTdb?retryWrites=true&w=majority'

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return mongoose
}