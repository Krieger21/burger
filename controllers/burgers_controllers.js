var express = require("express")
var burger = require("../models/burger.js")

var router = express.Router()

router.get("/", function(req, res){
    burger.all(function(data){
        var obj = {
            burgers: data
        }
        console.log(obj)

            res.render("index", obj)
    })
});

router.post("api/burgers", function(req, res){
    burger.add([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({ id: result.insertId})
    })
        
});

router.put("api/burger/:id", function(req,res){
    var condition = "id = " + req.params.id

    console.log("condition", condition)

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})


module.exports = router