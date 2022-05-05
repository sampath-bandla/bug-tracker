const mongoose = require("mongoose")


mongoose.connect( 'mongodb://localhost:27017/bug',
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("DATABASE - connect successfully with server")
})
.catch(e => {
    console.log(e)
})