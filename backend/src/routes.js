const express = require('express');
const devcontroller = require('./controllers/devcontroller.js');
const likecontroller = require('./controllers/likecontroller');
const dislikecontroller = require('./controllers/dislikecontroller');

const routes = express.Router();

routes.post('/devs', devcontroller.store);
routes.get('/devs', devcontroller.index);

routes.post('/devs/:devId/likes',likecontroller.store);
routes.post('/devs/:devId/dislikes',dislikecontroller.store);

module.exports = routes;