const fs = require('fs');
const path = require('path');
const { processXml } = require('./xmlprocessing');
const { saveToPdf } = require('./generatepdf');

function main() {
  const xmlPath = process.argv[2];
  const outputPath = process.argv[3];

  if (!xmlPath || !outputPath) {
    console.log('Please provide the path to the XML file and the output directory as command-line arguments.');
    process.exit(1);
  }

  const xmlContent = fs.readFileSync(xmlPath, 'utf8');
  const xmlFileName = path.basename(xmlPath);

  try {
    const failedAssertions = processXml(xmlContent);

    if (failedAssertions.length === 0) {
      console.log('No failed assertions found in the XML file.');
    } else {
      saveToPdf(failedAssertions, outputPath, xmlFileName);
    }
  } catch (error) {
    console.log('An error occurred while processing the XML file:', error.message);
  }
}

main();

