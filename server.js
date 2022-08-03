// DEPENDENCIES
const express = require('express')
const mongoose= require('mongoose')
// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI,{useNewURlParser:true,useUnifiedTopology: true},
  ()=>{
      console.log("connected to mongo: ", process.env.MONGO_URI)
  }
)



// MIDDLEWARE
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
const methodOverride=require('method-override')
// ROUTES
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  
  
  // 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

