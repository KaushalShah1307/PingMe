/**
 * Created by kshah on 5/22/16.
 */
var Ping = require('./lib/ping'),
    websites = [
        {
            url: 'http://www.google.com/',
            timeout: 5
        },
        {
            url: 'http://www.forbes.com/',
            timeout: 1
        }
    ],
    monitors = [];
websites.forEach(function (website) {
    var monitor = new Ping ({
        website: website.url,
        timeout: website.timeout
    });
    monitors.push(monitor);
});