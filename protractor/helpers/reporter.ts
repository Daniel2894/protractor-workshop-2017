import { DisplayProcessor, SpecReporter } from 'jasmine-spec-reporter';

export let reporter = () => {

  const { AwesomeReport } = require('jasmine-awesome-report');

  const config = {
    fullPath: 'reports',
    fileName: 'awesome',
    merge: true
  };

  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
  jasmine.getEnv().addReporter(new SpecReporter({
    customProcessors: [DisplayProcessor],
  }));
};
