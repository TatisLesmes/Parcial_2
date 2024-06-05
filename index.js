const express = require('express')
const cors = require('cors')
const morgan = require('morgan')


//Connect to database
require('./drivers/connect-db')

const app = express()
app.use(cors())
app.set('PORT',process.env.PORT || 3600 )


app.use(morgan('dev'))
app.use(express.json())



app.use('/teams',require('./routes/routes-teams'))
app.use('/LesmesPlayer',require('./routes/routes-player'))



app.listen(app.get('PORT'),()=>console.log(`Server Ready al port ${app.get('PORT')}`))