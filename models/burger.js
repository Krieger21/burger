var orm = require("../config/orm.js")

var burger = {
    add: function(valOfCol1, cb) {
        orm.insertOne("burgers", valOfCol1, function(res){
            cb(res)
        });
    },

    all: function(cb) {
        orm.pickAll("burgers", function(res){
            cb(res)
        })
    },

    update: function(objVal, condition, cb) {
        orm.updateOne("burgers", objVal, condition, cb, function(res) {
            cb(res)
        })
    }
}

module.exports = burger