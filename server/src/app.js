const express = require('express')
const bodyParser = require('body-parser') /* process json data */
const cors = require('cors')
const morgan = require('morgan')

const app = express()
/* morgan ('combined') show the details of the request. ie. the source and the timing and the device etc */
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) /* allow any clients in the world to access the domain */

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

app.listen(process.env.PORT || 8080)
