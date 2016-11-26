'use strict';

const
    app = require('../../infrastructure/app'),
    getTasks = require('../queries/get-tasks'),
    getTaskById = require('../queries/get-tasks-by-id');

let taskRouter = function () {
    app.get('/api/tasks',
        function (req, res) {
            
            getTasks
                .execute()
                .then(function (result) {
                    res.json(result);
                });
        });

    app.get('/api/tasks/:id', function (req, res) {
        getTaskById
            .execute(req.params.id)
            .then(function (result) {
                res.json(result);
            });
    });

};

module.exports = taskRouter;