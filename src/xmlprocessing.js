const { DOMParser } = require('xmldom');

function processXml(xmlContent) {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
    const testSuites = xmlDoc.getElementsByTagName('testsuite');
    const failedAssertions = [];

    for (let i = 0; i < testSuites.length; i++) {
      const testSuite = testSuites[i];
      const testSuiteName = testSuite.getAttribute('name');
      const testCases = testSuite.getElementsByTagName('testcase');

      for (let j = 0; j < testCases.length; j++) {
        const testCase = testCases[j];
        const testName = testCase.getAttribute('name');
        const failureElement = testCase.getElementsByTagName('failure')[0];

        if (failureElement) {
          const failureMessage = failureElement.getAttribute('message');
          const assertionDetails = {
            TestSuiteName: testSuiteName,
            TestName: testName,
            FailureMessage: failureMessage,
          };
          failedAssertions.push(assertionDetails);
        }
      }
    }

    return failedAssertions;
  }

module.exports = { processXml };

