/**
 * Created by kshah on 5/22/16.
 */

var request = require('request'),
    statusCodes = require('http').STATUS_CODES;

/* Ping Constructor */
function Ping (opts) {
    // holds website to be monitored
    this.website = '';
    // ping intervals in minutes
    this.timeout = 15;
    // interval handler
    this.handle = null;
    // initialize the app
    this.init(opts)
}



