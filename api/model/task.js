'use strict';

const
    enums = require('../../utils/enums'),
    taskBase = require('./taskBase'),
    tasks = require('./fakeTasks'),
    taskLoader = require('./fakeTaskLoader');


let Task = {
    find: function (callback) {
        // returning the tasks to the caller
        callback(null, tasks.slice(0, 100));
    },

    get: function (id, callback) {
        let task = tasks.find(function (element) {
            // selecting the task
            return element.id == id;
        });

        if (task.state === enums.taskStates.running || task.state === enums.taskStates.pending) {
            taskLoader(task);
        }

        // returning the requested task to the caller
        callback(null, task);
    }
};

module.exports = Task;