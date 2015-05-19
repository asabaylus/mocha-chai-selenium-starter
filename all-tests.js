/* jshint evil: true */

/**
* Sample WebDriver Mocha tests with Chai-as-promised
* https://github.com/admc/wd/blob/master/examples/promise/mocha-specs.js
* Full Documentation is avaiable from https://github.com/admc/wd
*/
var colors = require('colors');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var wd = require('wd');
var config = require('./selenium.config.js');
var desired = config.desired;
var domain = config.domain;
var service = config.service;

    /**
    * Use Chai.js BDD style assertions with promises
    * https://github.com/domenic/chai-as-promised/
    */
    chai.use(chaiAsPromised);
    chai.should();
    chaiAsPromised.transferPromiseness = wd.transferPromiseness;

// ------------------------------------
// Provision the browser / OS
// ------------------------------------
var browser = wd.promiseChainRemote(config.service);


// ------------------------------------
// Optional extra logging
// ------------------------------------

// browser._debugPromise();
// browser.on('status', function(info) {
//   console.log(info.cyan);
// });
// browser.on('command', function(eventType, command, response) {
//   console.log(' > ' + eventType.cyan, command, (response || '').grey);
// });
// browser.on('http', function(meth, path, data) {
//   console.log(' > ' + meth.magenta, path, (data || '').grey);
// });

describe('Baylus.com', function (){

    this.timeout(config.timeout);

    // require('./aem-login');
    require('./homepage').suite(config, browser);
    require('./blog_post').suite(config, browser);

});
