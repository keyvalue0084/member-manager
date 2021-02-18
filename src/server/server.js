var express    = require('express');
const router = require('./routes/router');
const cors = require('cors');
var app = express();

// configuration ===============================================================
app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use('/', router);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});