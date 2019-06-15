const app = require('./app');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('express "foo" app listening on port ' + port));
