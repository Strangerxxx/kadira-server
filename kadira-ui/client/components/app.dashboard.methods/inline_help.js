/* eslint max-len: 0 */

var helpData = {
  "methods-breakdown": {
    title: "About Method Breakdown",
    message: "Using the Method Breakdown, you can drill down into method specific metrics.",
    options: {
      placement: "top"
    }
  },
  "timeseries-responseTimeBreakdown": {
    title: "About Response Time Breakdown",
    message: "Response Time Breakdown simply shows Response Time of the selected method over the time.",
    options: {
      placement: "bottom"
    }
  },
  "timeseries-throughput": {
    title: "About Throughput",
    message: "This chart shows throughput for method calls for the selected date range.",
    options: {
      placement: "bottom"
    }
  },
  "summary-dashboardMethods": {
    title: "About Methods Summary",
    message: "Methods Summary shows the summary of the method in the selected date range.",
    options: {
      placement: "bottom"
    }
  }
};

InlineHelp.initHelp(helpData);
