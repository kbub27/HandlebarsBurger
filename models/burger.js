var Orm = require('../config/orm.js');

module.exports = {
    all: (cb) => {
        Orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },

    create: (cols, vals, cb) => {
        Orm.insertOne('burgers', cols, vals, (res) => {
            cb(res);
        });
    },

    update: (objColVals, condition, cb) => {
        Orm.updateOne('burgers', objColVals, condition, (res) => {
            cb(res);
        });
    }
};