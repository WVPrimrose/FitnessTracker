// importing packages

const express = require('express');
const connection = require('./connections/connections');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express()

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// if in production, serve client/build for static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Listening live on port ${PORT}.  Blah, blah, blah...  I am so bored.`)
    })
})