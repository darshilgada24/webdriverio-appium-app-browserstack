exports.config = {
  user: 'darshilgada1',
  key: 'fP6DdHuqEjCUEmnvJmz7',

  updateJob: false,
  specs: [
    './first_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android Parallel',
    name: 'parallel_test',
    realMobile: true,
    app: 'bs://24066b2934ed9885f2e4d3282d9bb49105060e51',
    'browserstack.debug': true
  },

  capabilities: [{
    device: 'Google Pixel 3',
    os_version: "9.0"
  }, {
    device: 'Samsung Galaxy S10e',
    os_version: "9.0"
  }],

  reporters: ["browserstack"],
  reporterOptions: {
    browserstack: {
      outputDir: "./"
    }
  },

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};

exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
