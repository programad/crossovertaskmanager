'use strict';

const 
    enums = require('../../utils/enums');

let metricsBase = {
            state: enums.taskStates.pending,
            progress: 0,
            test: 0,
            maintainability: 0,
            security: 0,
            workmanship: 0
        };

let buildBase = {
            state: enums.taskStates.pending,
            progress: 0,
            debug: '',
            release: '',
            startedAt: '',
            endedAt: ''
        };

let testBase = {
            state: enums.taskStates.pending,
            progress: 0,
            passed: 0,
            skiped: 0,
            codeCovered: 0
        };

let resultBase = {
            state: 'pending',
            message: ''
        };

exports.metricsBase = metricsBase;
exports.buildBase = buildBase;
exports.testBase = testBase;
exports.resultBase = resultBase;