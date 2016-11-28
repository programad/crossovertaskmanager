'use strict';

const
    mathHelper = require('../lib/mathHelper'),
    enums = require('../../utils/enums');

    
let fakeIncrement = 5;

let running = false;

let taskLoader = function (task) {

    if (task.state === enums.taskStates.pending && running)
        return;

    task.state = enums.taskStates.pending;
    task.running = true;

    if ( task.metrics.state !== enums.taskStates.completed ) {

        task.metrics.state = enums.taskStates.running;
        task.metrics.progress += fakeIncrement;

        if ( task.metrics.progress < 100 )
            return;

        task.metrics = {
            test: mathHelper.getRandomInt(50,95),
            maintainability: mathHelper.getRandomInt(50,95),
            security: mathHelper.getRandomInt(50,95),
            workmanship: mathHelper.getRandomInt(50,95),
            state: enums.taskStates.completed,
            progress: 100
        };

        return;
    }

     if ( task.build.state !== enums.taskStates.completed ) {

        task.build.state = enums.taskStates.running;
        task.build.progress += fakeIncrement;
        task.build.startedAt = task.build.startedAt || new Date();

        if ( task.build.progress < 100 )
            return;

        task.build = {
            debug: '',
            release: '',
            endedAt: new Date(),
            state: enums.taskStates.completed,
            progress: 100
        };

        return;
    }

    if ( task.unitTest.state !== enums.taskStates.completed ) {

        task.unitTest.state = enums.taskStates.running;
        task.unitTest.progress += fakeIncrement;

        if ( task.unitTest.progress < 100 )
            return;

        task.unitTest = {
            passed: mathHelper.getRandomInt(90,190),
            skiped: mathHelper.getRandomInt(10,30),
            codeCovered: mathHelper.getRandomInt(0,100)/100,
            state: enums.taskStates.completed,
            progress: 100
        };

        return;
    }

    if ( task.functionalTest.state !== enums.taskStates.completed ) {

        task.functionalTest.state = enums.taskStates.running;
        task.functionalTest.progress += fakeIncrement;

        if ( task.functionalTest.progress < 100 )
            return;

        task.functionalTest = {
            passed: mathHelper.getRandomInt(4000,8000),
            skiped: mathHelper.getRandomInt(2000,3000),
            codeCovered: mathHelper.getRandomInt(0,100)/100,
            state: enums.taskStates.completed,
            progress: 100
        };

        return;
    }

    task.state = task.type === enums.taskTypes.firewall ? enums.taskStates.accepted : enums.taskStates.completed;
    task.result = {
        state: enums.taskStates.completed,
        message: enums.taskStates.completed
    };

    running = false;
};

module.exports = taskLoader;