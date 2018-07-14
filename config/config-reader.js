'use strict';

/**
 * loads the config json and add the env varibales to node process.env
 */

const configJson = require("../config.json") 

var env = process.env.NODE_ENV || 'development';

if ((env === "development") || (env == "test")) {
    let config = require("../config.json");

    process.env.DATABASE_NAME = config["DATABASE_NAME"];
    process.env.SECRET = config["SECRET"];

    Object.keys(config["ENV"][env]).forEach((key) => {
        process.env[key] = config["ENV"][env][key];
    });

}

/**
 * util function to get the endpoints from config json
 * @returns endpoint for all apis
 */

var configLoader = {

    getEndPointAddHost: function() {
        return configJson["ENDPOINTS"]["addHost"];
    },

    getEndPointDeleteHost: function() {
        return configJson["ENDPOINTS"]["deleteHost"];
    },

    getEndPointCreateVM: function() {
        return configJson["ENDPOINTS"]["createvm"];
    },

    getEndPointDeleteVM: function() {
        return configJson["ENDPOINTS"]["deletevm"];
    },
    
    getEndPointCloneVM: function() {
        return configJson["ENDPOINTS"]["clonevm"];
    }

}