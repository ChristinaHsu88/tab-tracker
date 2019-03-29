const express = require('express')
const bodyParser = require('body-parser') /* process json data */
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors()) /* allow any clients in the world to access the domain */

app.get('/status', (req, res) => {
  res.send({
    message: 'hello word'
  })
})

app.listen(process.env.PORT || 8081)
