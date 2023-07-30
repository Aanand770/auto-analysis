# auto-analysis

`auto-analysis` is an npm package that provides a convenient solution to process XML test results and generate a PDF document presenting a tabular analysis of failed assertions. It is designed to be used through the command-line interface and is intended to simplify the analysis and sharing of XML test results in a clear and well-structured PDF format.

## Installation

To install `auto-analysis`, use npm:

```
npm install auto-analysis
```

## Usage

```
node index.js <path_to_xml_file> <output_directory>
```

Replace `<path_to_xml_file>` with the path to the XML file containing test results and `<output_directory>` with the directory where the generated PDF should be saved.

## Features

- Process XML Data: The package processes the provided XML file, extracting information about failed test cases. It identifies the test suite name, test case name, and the associated failure message for each failed assertion.

- PDF Generation: After processing the XML data, the package generates a PDF document that presents the failed assertions in a structured tabular format. Each row in the table represents a failed assertion, containing details like the test suite name, failed assertion name, and the failure message.

- Header and Footer: The PDF document's header displays "Auto Analysis for" followed by the XML file name (without the ".xml" extension) at the center of each page. The footer shows the page number, indicating which page the reader is currently viewing.

- File Name: The generated PDF file's name follows the format "Auto_Analysis_for_{XMLFileName}_{timestamp}.pdf," where {XMLFileName} represents the original XML file name (without the ".xml" extension), and {timestamp} is the current date and time in ISO format.

- Successful Processing: If the XML file contains no failed assertions, the package will output a message stating that no failed assertions were found.

- Successful Saving: Upon successful processing and PDF generation, the package saves the generated PDF in the specified output directory. It logs a message indicating the successful saving of the PDF file, providing the file's full path.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
