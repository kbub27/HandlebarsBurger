var Con = require('./connection.js');

// FUNCTION TO GET QUESTION MARKS INTO A STRING
var printQs = (num) => {
    var arr = [];

    for (let i = 0; i < arr.length; i++) {
        arr.push('?');
    }

    return arr.toString();
};

// FUNCTION TO CONVERT OBJECT PAIRS TO SQL SYNTAX
var o2s = (ob) => {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
        }
    }

    return arr.toString();
}

module.exports = {

    selectAll: (input, cb) => {
        var query = 'select * from ' + input + ';';
        Con.query(query, (err, res) => {
            if (err) throw err;
            //CALLBACK THE RESULT
            cb(res)
        })
    },

    insertOne: (table, cols, vals, cb) => {
        var query  = 'insert into ' + table;
        query += cols.toString();
        query += ') ';
        query += 'values (';
        query += printQs(vals.length);
        query += ') ';

        Con.query(query, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: (table, objColVals, condition, cb) => {

    }
}