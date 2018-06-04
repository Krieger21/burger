var connection = require("./connection.js")

var orm = {
    insertOne: function(valOfCol1, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) " 
        queryString += "VALUES (";
        queryString += "??, ";
        queryString += 0;
        querystring += ")"
        
        console.log(queryString)

        connection.query(queryString, [valOfCol1], function(err, result) {
            if (err) {
                throw err
            }
            
            cb(results)
        });
    },

    pickAll: function(cb) {
        var queryString2 = "SELCET * FROM burgers"

        console.log(queryString2)

        connection.query(queryString2, function(err, results){
            if (err) {
                throw err
            }

            cb(results)
        })
    },

    updateOne: function(objVal, condition, cb) {
        var queryString3 = "UPDATE burgers"
        
        queryString3 += " SET "
        queryString3 += objVal
        queryString3 += " WHERE "
        queryString3 += condition

        console.log(queryString3)

        connection.query(queryString3, function(err, results){
            if (err) {
                throw err
            }

            cb(results)
        })
    }
}

module.exports = orm
