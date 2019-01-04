var connection = require("../config/connection.js");

var orm = {
    insert: function(rand_tbl, rand_col, rand_val, cb){
        connection.query("INSERT INTO " + rand_tbl + " ( " + rand_col + " ) " + " VALUES (?)", [rand_val], function(err, result){
            cb(result);
        });
    },
    read: function(rand_tbl, cb){
        connection.query("SELECT * FROM " + rand_tbl + ";", function(err, result){
            cb(result);
        });
    },
    update: function(rand_tbl, rand_set_col, rand_set_val, rand_col_param, rand_val_param, cb){
        connection.query("UPDATE " + rand_tbl + " SET " + rand_set_col + " = ? WHERE " + rand_col_param + " = ?", [rand_set_val, rand_val_param], function(err, result){
            cb(result);
        });
    },
    delete: function(rand_tbl, rand_col, rand_val, cb){
        connection.query("DELETE FROM " + rand_tbl + " WHERE " + rand_col + " = ?",[rand_val], function(err, result){
            cb(result);
        });
    }
}

module.exports = orm;