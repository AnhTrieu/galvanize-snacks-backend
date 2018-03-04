let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let cors = require('cors')
let morgan = require('morgan')
const PORT = process.env.PORT || 3000

let snacksRoutes = require('./routes/snacks.js')
let usersRoutes = require('./routes/users.js')
let reviewsRoutes = require('.routes/reviews.js')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

app.use('/snacks', snacksRoutes)

app.use((err, req, res, next) => {
  let status = err.status
  return res.status(status).json('msg': 'Server Error!')
  next(err)
})

// app.use((req, res, next) => {
//   res.status(404).json({
//     err: 'NOT FOUND!'
//   })
// })


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})