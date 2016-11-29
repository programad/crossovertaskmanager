var APPCONFIG = (function () {

    var taskStates = {
        pending: 'pending',
        running: 'running',
        accepted: 'accepted',
        rejected: 'rejected',
        completed: 'completed'
    };

    var taskTypes = {
        build: 'build',
        firewall: 'firewall'
    };

    return {
        ServiceInterval: 500,
        TaskStates: taskStates,
        TaskTypes: taskTypes
    }

})();