const express = require('express');

const SessionController = require('./controllers/SessionController')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);


routes.get('/ongs', OngController.get);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.get);

routes.get('/incidents', IncidentController.get);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;