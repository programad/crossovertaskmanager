'use strict';

const 
    enums = require('../../utils/enums'),
    taskBase = require('./taskBase');

let task432459 = {
        'id': 432459,
        'alias': '432459',
        'owner': 'samy',
        'startedAt': '2014-04-16T06:43:00.000Z',
        'state': enums.taskStates.pending,
        'type': enums.taskTypes.firewall,
        'metrics': {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            state: enums.taskStates.rejected
        },
        'build': {
            debug: '',
            release: '',
            startedAt: '2014-04-18T10:53:00.000Z',
            endedAt:'2014-04-18T11:43:00.000Z',
            state: enums.taskStates.completed
        },
        'unitTest': {
            passed: 142,
            skiped: 10,
            codeCovered: 0.76,
            state: enums.taskStates.completed
        },
        'functionalTest': {
            passed: 4321,
            skiped: 2145,
            codeCovered: 0.23,
            state: enums.taskStates.completed
        },
        'result': {
            state: enums.taskStates.completed,
            message: enums.taskStates.completed
        }
    };

let task432460 = {
        'id': 432460,
        'alias': '',
        'owner': '',
        'startedAt': '2014-04-17T10:53:00.000Z',
        'state': enums.taskStates.rejected,
        'type': 'firewall',
        'metrics': {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            state: enums.taskStates.rejected
        },
        'build': {
            debug: '',
            release: '',
            startedAt: '2014-04-18T10:53:00.000Z',
            endedAt:'2014-04-18T11:43:00.000Z',
            state: ''
        },
        'unitTest': {
            passed: 142,
            skiped: 10,
            codeCovered: 0.76,
            state: ''
        },
        'functionalTest': {
            passed: 4321,
            skiped: 2145,
            codeCovered: 0.23,
            state: ''
        },
        'result': {
            state: enums.taskStates.rejected,
            message: enums.taskStates.rejected
        }
    };

let task432461 = {
        'id': 432461,
        'alias': '432461',
        'owner': 'samy',
        'startedAt': '2014-04-18T10:53:00.000Z',
        'state': enums.taskStates.rejected,
        'type': enums.taskTypes.firewall,
        'metrics': {
            test: 64,
            maintainability: 53,
            security: 64,
            workmanship: 72,
            state: enums.taskStates.rejected
        },
        'build': {
            debug: '',
            release: '',
            startedAt: '2014-04-18T10:53:00.000Z',
            endedAt:'2014-04-18T11:43:00.000Z',
            state: enums.taskStates.completed
        },
        'unitTest': {
            passed: 142,
            skiped: 10,
            codeCovered: 0.76,
            state: enums.taskStates.completed
        },
        'functionalTest': {
            passed: 4321,
            skiped: 2145,
            codeCovered: 0.23,
            state: enums.taskStates.completed
        },
        'result': taskBase.resultBase
    };

let task432462 = {
        'id': 432462,
        'alias': '432462',
        'owner': 'jtuck',
        'startedAt': '2014-04-18T12:12:00.000Z',
        'state': enums.taskStates.pending,
        'type': enums.taskTypes.firewall,
        'metrics': taskBase.metricsBase,
        'build': taskBase.buildBase,
        'unitTest': taskBase.testBase,
        'functionalTest': taskBase.testBase,
        'result': taskBase.resultBase
    };

let  task432465 = {
        'id': 432465,
        'alias': 'Tenrox_R1_1234',
        'owner': '',
        'startedAt': '2014-04-17T12:42:00.000Z',
        'state': enums.taskStates.pending,
        'type': enums.taskTypes.build,
        'metrics': taskBase.metricsBase,
        'build': taskBase.buildBase,
        'unitTest': taskBase.testBase,
        'functionalTest': taskBase.testBase,
        'result': taskBase.resultBase
    };
    

let  task432466 = {
        'id': 432466,
        'alias': 'Tenrox_R1_1235',
        'owner': '',
        'startedAt': new Date(),
        'state': enums.taskStates.pending,
        'type': enums.taskTypes.build,
        'metrics': taskBase.metricsBase,
        'build': taskBase.buildBase,
        'unitTest': taskBase.testBase,
        'functionalTest': taskBase.testBase,
        'result': taskBase.resultBase
    };

let tasks = [task432459, task432460, task432461, task432462, task432465, task432466];

module.exports = tasks;