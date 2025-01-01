import jsPDF from "jspdf";

function GeneratePdf(transactions, bankName, monthName) {
  const doc = new jsPDF();

  // Title with bank name and statement month
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text(bankName, 10, 20);
  doc.setFontSize(14);
  doc.text(`${monthName} Statement`, 10, 30);

  // Draw a line to separate header
  doc.setLineWidth(0.5);
  doc.line(10, 35, 200, 35); // Horizontal line

  // Table Headers
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text("No.", 10, 45);
  doc.text("Transaction Name", 30, 45);
  doc.text("Amount ($)", 120, 45);
  doc.text("Date", 160, 45);

  // Draw a line below the headers
  doc.setLineWidth(0.3);
  doc.line(10, 47, 200, 47);

  let yPosition = 55; // Starting position for the first row
  const pageHeight = doc.internal.pageSize.height;

  // Loop through the transactions and create rows
  transactions.forEach((transaction, index) => {
    // Check if the content exceeds the page height
    if (yPosition > pageHeight - 20) {
      doc.addPage(); // Add a new page if content exceeds
      yPosition = 20; // Reset the yPosition for the new page
      // Redraw the table headers on the new page
      doc.text("No.", 10, yPosition);
      doc.text("Transaction Name", 30, yPosition);
      doc.text("Amount ($)", 120, yPosition);
      doc.text("Date", 160, yPosition);
      doc.setLineWidth(0.3);
      doc.line(10, yPosition + 2, 200, yPosition + 2);
      yPosition += 10; // Move the yPosition after drawing headers
    }

    // Draw transaction details
    doc.text((index + 1).toString(), 10, yPosition);
    doc.text(transaction.name, 30, yPosition);
    doc.text(`$${transaction.amount.toFixed(2)}`, 120, yPosition);
    doc.text(transaction.date, 160, yPosition);

    // Increment yPosition for the next row
    yPosition += 10;
  });

  // Footer with current date
  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  const currentDate = new Date().toLocaleDateString();
  doc.text(`Generated on: ${currentDate}`, 10, yPosition + 10);

  // Save the PDF with a filename including the current date
  const fileName = `bank_statement_${currentDate}.pdf`;
  doc.save(fileName);
}

export default GeneratePdf;
