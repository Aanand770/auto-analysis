const fs = require('fs');
const path = require('path');
const jsPDF = require('jspdf');
require('jspdf-autotable');

function saveToPdf(failedAssertions, outputPath, xmlFileName) {
  const doc = new jsPDF.jsPDF();
  const timestamp = new Date().toISOString().replace(/:/g, '-');
  const fileName = `Auto_Analysis_for_${xmlFileName.replace('.xml', '')}_${timestamp}.pdf`;
  const tableData = failedAssertions.map((assertion, index) => [
    index + 1,
    assertion.TestSuiteName,
    assertion.TestName,
    assertion.FailureMessage,
  ]);
  const headerText = `Auto Analysis for ${xmlFileName.replace('.xml', '')}`;

  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text(headerText, doc.internal.pageSize.getWidth() / 2, 10, { align: 'center' });

  doc.autoTable({
    head: [['#', 'Request Name', 'Failed Assertion', 'Failure Message']],
    body: tableData,
    startY: 20,
    columnStyles: {
      1: { cellWidth: 'auto' },
      2: { cellWidth: 'auto' },
    },
    didDrawPage: function (data) {
      // Add footer
      const totalPages = doc.internal.getNumberOfPages();
      const currentPage = data.pageNumber;
      const footerText = `Page ${currentPage} of ${totalPages}`;
      doc.setFontSize(8);
      doc.text(footerText, doc.internal.pageSize.getWidth() / 2, doc.internal.pageSize.getHeight() - 10, { align: 'center' });
    },
  });

  doc.save(path.join(outputPath, fileName));
  console.log(`Results saved successfully to ${path.join(outputPath, fileName)}`);
}


module.exports = { saveToPdf };

