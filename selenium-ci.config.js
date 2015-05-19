// Configuration for running Tests in CI

module.exports.desired = {
  browserName: 'internet explorer'
  , version: '11'
  , platform: 'Windows 7'
  , tags: ["foo", "bar", "baz"]
  , name: "AEM Production"
};

module.exports.domain = "http://www.baylus.com";

// args which should be passed into the browser config
module.exports.service = [
	  "ondemand.saucelabs.com"
	  , 80
	  , "user_name_here"
	  , "api_key_here"
];

module.exports.timeout = 120000;
