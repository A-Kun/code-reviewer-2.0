'use strict';

var mongoose = require('mongoose');

var submission_schema = require("../../../models/submission_schema.js");


// generates search arg for GET, add more queries if needed
var searchInfo = function(query) {
    var search_info = {};
    //TODO: change utorid to student id
    if (query.student_id) search_info.utorid = query.student_id;
    return search_info;
}

module.exports = function (router) {
    router.route('/:work_name/').get(function (req, res, next) {
        //TODO check log in
        //TODO check query
        var submission_model = mongoose.model(req.params.work_name, submission_schema);

        submission_model.find(searchInfo(req.query) ,function(err, work) {
            if (err) res.status(404).end("work not found.");
            return res.sendResponse(work);
        });
        
    }).put(function (req, res, next) {

    }).delete(function (req, res, next) {

    }).all(function (req, res, next) {
        return res.invalidVerb();
    });
};