// burgers_controller.js

var express = require("express");
var router = express.Router();

var burg = require("../models/burger.js");

router.get("/", function (req, res) {
    // get burg here
    burg.all(function (data) {
        var burgObject = {
            burg: data
        };
        console.log(burgObject);
        // draw the page with the burg data
        res.render("index", burgObject);
    });
});


router.post("/api/burger", function (req, res) {
    
    console.log(req.body);
    burg.create(["burger"], [req.body.burger], function (result) {
        
        res.json({
            id: result.insertId
        });
    });
});






module.exports = router;