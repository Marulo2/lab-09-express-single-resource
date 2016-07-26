'use strict';

const express = require('express');
let app = express();
let router = require('./route/route');

app.use('/api', router);

app.listen(3000, () => console.log('Server up on 3000!! '));
