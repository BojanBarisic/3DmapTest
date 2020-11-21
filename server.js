const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const BASEDIR = '/static';
const staticServe = express.static(__dirname + BASEDIR);

app.use(staticServe);
app.use(cors());

app.listen(port, () => console.log(`App is listening on port ${port}.`));
