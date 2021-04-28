exports.config = {
  user: 'darshilgada1',
  key: 'fP6DdHuqEjCUEmnvJmz7',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "Test node js report",
    build: 'Test node js report',
    name: 'Azure test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: 'bs://24066b2934ed9885f2e4d3282d9bb49105060e51',
    'browserstack.debug': true
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
