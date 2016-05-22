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

/* Methods */

Ping.prototype = {
    init: function (opts) {
        var self = this;
        self.website = opts.website;
        self.timeout = (opts.timeout * (60 * 1000));
        // start monitoring
        self.start();
    },

    start: function () {
        var self = this,
            time = Date.now();
        console.log("\nLoading... " + self.website + "\nTime: " + time + "\n");
        // create an interval for pings
        self.handle = setInterval(function () {
            self.ping();
        }, self.timeout);
    },


