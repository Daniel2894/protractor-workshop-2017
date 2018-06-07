import { browser, Config } from 'protractor';
import { reporter }   from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/**/*.spec.js'],
  noGlobals: true,
  getPageTimeout: 30000,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
