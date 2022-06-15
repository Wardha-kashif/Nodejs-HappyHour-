const express = require('express');
const bodyParser = require('body-parser');

const LeaderRouter = express.Router();

LeaderRouter.use(bodyParser.json());

LeaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the Leaders to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the Leader ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /Leader');
    })
    .delete((req, res, next) => {
        res.end('Deleting all leaders');
    });

LeaderRouter.route('/leaders/:leadersId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the leaders ' + req.params.leadersId + ' to you!');
    })
    .post((req, res, next) => {
        res.end('POST operation not supported on /leaders/' + req.params.leadersId);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Will update the leaders: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting leaders: ' + req.params.leadersId);
    });


module.exports = LeaderRouter;