'use strict';

const 
    enums = require('../../utils/enums');

let metricsBase = {
            state: enums.taskStates.pending,
            test: 0,
            maintainability: 0,
            security: 0,
            workmanship: 0,
            progress: 0
        }

let buildBase = {
            state: enums.taskStates.pending,
            debug: '',
            release: '',
            startedAt: '',
            endedAt: '',
            progress: 0
        }

let testBase = {
            state: enums.taskStates.pending,
            passed: 0,
            skiped: 0,
            codeCovered: 0,
            progress: 0
        }

exports.metricsBase = metricsBase;
exports.buildBase = buildBase;
exports.testBase = testBase;