let running = false;

let taskLoader = function (task) {
    let fakeIncrement = 5;

    if (task.state === 'pending' && running)
        return;

    task.state = 'pending';
    task.running = true;

    if (task.build.state !== 'complete') {
        task.build.state = 'running';
    }
};

module.exports = taskLoader;