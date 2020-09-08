const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(session({
  secret: 'LunaIsACat',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: true}))
app.use(methodOverride('_method'))

const routes = require('./routes')

const usePassport = require('./config/passport')
usePassport(app)

app.use(routes)

app.listen(PORT, () => {
    console.log(`APP is running on http://localhost:${PORT}`)
})