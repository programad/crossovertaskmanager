var APPCONFIG = (function () {

    let taskStates = {
        pending: 'pending',
        running: 'running',
        accepted: 'accepted',
        rejected: 'rejected',
        completed: 'completed'
    }

    let taskTypes = {
        build: 'build',
        firewall: 'firewall'
    }

    return {
        ServiceInterval: 500,
        TaskStates: taskStates,
        TaskTypes: taskTypes
    }

})();