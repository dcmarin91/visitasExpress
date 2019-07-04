const express = require('express');
const cookieSession = require('cookie-session')
const app = express();
const PORT = 3000;
let count = 0;

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.urlencoded());

app.use(cookieSession({
  secret: "Una cadena secreta",
  // Cookie Options
  maxAge: 10 * 1000 // 3 minutes
}))

app.get('/', function(req, res) {
  count++
  req.session.views = (req.session.views || 0) + 1
  res.render("index",{n : req.session.views, m: count});
})

app.listen(3000, () => {
  console.log(`Server is running on port: ${PORT}.`)
});