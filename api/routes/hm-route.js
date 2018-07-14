'use strict';

const express = require('express');
const hmController = require('../controllers/hm-controller');

var hmRouter = express.Router();

hmRouter.route('/addhost')
    .post(function (req, res) { hmController.addhost(req, res) });

hmRouter.route('/deletehost:id')
    .delete(function (req, res) { hmController.deletehost(req, res) });

hmRouter.route('/createvm')
    .post(function (req, res) { hmController.createvm(req, res) });

hmRouter.route('/clonevm')
    .post(function (req, res) { hmController.clonevm(req, res) });

hmRouter.route('/deletevm/:id')
    .delete(function (req, res) { hmController.deletevm(req, res) });

module.exports = hmRouter;