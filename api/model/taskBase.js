'use strict';

const
    enums = require('../../utils/enums');

function metricsBase() {
    return {
        state: enums.taskStates.pending,
        progress: 0,
        test: 0,
        maintainability: 0,
        security: 0,
        workmanship: 0
    };
}

function buildBase() {
    return {
        state: enums.taskStates.pending,
        progress: 0,
        debug: '',
        release: '',
        startedAt: '',
        endedAt: ''
    };
}

function testBase() {
    return {
        state: enums.taskStates.pending,
        progress: 0,
        passed: 0,
        skiped: 0,
        codeCovered: 0
    };
}

function resultBase(taskstate, message) {
    return {
        state: taskstate,
        message: message
    };
}

exports.metricsBase = metricsBase;
exports.buildBase = buildBase;
exports.testBase = testBase;
exports.resultBase = resultBase;