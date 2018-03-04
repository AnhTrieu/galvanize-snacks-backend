const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const PORT = process.env.PORT || 3000
const app = express()
const snacksRouter = require('./routes/snacks.js')
const usersRouter = require('./routes/users.js')
const reviewsRouter = require('.routes/reviews.js')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

app.use((err, req, res, next) => {
  let status = err.status
  return res.status(status).json('msg': 'Server Error!')
  next(err)
})

app.use((req, res, next) => {
  res.status(404).json({
    err: 'NOT FOUND!'
  })
})


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})