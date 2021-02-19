var express    = require('express');
var cors = require('cors');
var app = express();

const member = require('./routes/member');

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use('/api/member', member);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});