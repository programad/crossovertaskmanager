'use strict';

const
  q = require('q'),
  model = require('../model/task');

let getTaskById = {
  execute: function (id) {
    let defered = q.defer();
    model.get(id, function (err, data) {
      if (err) return defered.reject(err);
      defered.resolve(data);
    });

    return defered.promise;
  }
};

module.exports = getTaskById;