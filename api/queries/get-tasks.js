'use strict';

const
  q = require('q'),
  model = require('../model/task');

let getTasks = {
  execute: function(){
    let defered = q.defer();
          model.find(function (err, data) {
                  if (err) return defered.reject(err);
                  defered.resolve(data);
              });

          return defered.promise;
  }
};

module.exports = getTasks;
