var express    = require('express');
var bodyParser = require('body-parser');

var app        = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port       = process.env.PORT || 8000;

app.use(express.static('./dist'));

app.get('/', function(req, res) {
	res.sendfile('./dist/index.html');
});

app.listen(port);

console.log('Server started on port ' + port);