'use strict';

var validator = require('../../lib/validator'),
    mongoose = require('mongoose');

module.exports = function (router) {
    /*
     * JUST FOR DEMO. PLEASE DO NOT COPY AND PASTE CODE WITH THE COMMENTS.
     * THE COMMENTS ARE JUST TO SHOW HOW IT WORKS.
     */
    router.route('/').get(function(req, res, next) {
        var user_model = mongoose.getModel('user'),
            err;
        //make sure utorid is in the query and no other parameters
        validator.validate(req.query, {
            type: "object",
            properties: {
                utorid: {  type: "string" }
            },
            additionalProperties: false,
            required: ["utorid"]
        });
        // Check if there's errors.
        error = validator.getLastErrors();
        // if there's an error, return error response.
        if (error) return res.requestError({ status: 400, message: error });

        // mongoose.getModel returns promise with the user_model promise
        return user_model.findAsync(req.query).then(function(users) {
            return res.sendResponse(users);
        }).catch(function(err) {
            return res.requestError({
                message: "Server Error"
            });
        });
    }).all(function (req, res, next) {
        return res.invalidVerb();
    });
};