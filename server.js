//Install express server
const express = require('express');
const path = require('path');

const app = express();
// for Security connection
var forceSsl = require('force-ssl-heroku');
app.use(forceSsl);
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/algortemp'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/algortemp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);