'use strict';

let taskStates = {
    pending : 'pending',
    running : 'running',
    accepted : 'accepted',
    rejected : 'rejected',
    completed : 'completed'
}

let taskTypes = {
    build : 'build',
    firewall : 'firewall'
}

exports.taskStates = taskStates;
exports.taskTypes = taskTypes;