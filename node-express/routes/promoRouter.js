const express = require('express');
const bodyParser = require('body-parser');

const PromoRouter = express.Router();

PromoRouter.use(bodyParser.json());

PromoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the Promotions to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the promotion ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all promotions');
    });

PromoRouter.route('/promotions/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send details of the promotions ' + req.params.promotionsId + ' to you!');
    })
    .post((req, res, next) => {
        res.end('POST operation not supported on /promotions/' + req.params.promotionsId);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('Will update the promotions: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .delete((req, res, next) => {
        res.end('Deleting promotions: ' + req.params.promotionsId);
    });


module.exports = PromoRouter;