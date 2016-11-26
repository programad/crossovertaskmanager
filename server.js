'use strict';

const
    config = require('./infrastructure/config'),
    app = require('./infrastructure/app'),
    mainRouter = require('./api/routes/task.router');

// set specific routes
mainRouter();

// set global routes
// this function captures anything requested and routes it to the index. There, the angular router will decide what to do with the requested url
app.get('*', function (request, response, next) {
        response.sendFile(rootDir + '/' + appRoot + '/index.html');
    });

app.listen(config.port, () => {    
    console.log(`Task Manager running at http://localhost:${config.port}`);
});