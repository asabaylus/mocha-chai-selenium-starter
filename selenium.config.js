// Configuration for running Tests on local

module.exports.desired = {
  browserName:'chrome'
  , tags: ["WEBSITE"]
  , name: "Homepage"
};

module.exports.domain = "http://www.baylus.com";

// args which should be passed into the browser config
module.exports.service = [];


module.exports.timeout = 30000;
