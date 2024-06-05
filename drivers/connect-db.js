const mongoose = require('mongoose')

//const URI = "mongodb://localhost:27017/projects"
const URI="mongodb+srv://jairouptc:nyxmeR-zusjoz-8zubda@cluster0.9lfyrk5.mongodb.net/?retryWrites=true&w=majority"


mongoose.set('strictQuery')

mongoose.connect(URI)
  .then(()=> console.log('Connect Success...funcionando'))
  .catch( err => console.log('Error... ${err}'))

module.exports = mongoose