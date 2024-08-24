document.getElementById("signUpBtn").addEventListener("click", function() {
    // Fetching values from input fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Creating the PDF preview content
    const pdfContent = `
        <h2>Create Account Details</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    const pdfPreview = document.getElementById("pdfPreview");
    pdfPreview.innerHTML = pdfContent;
    pdfPreview.style.display = 'block';

    // Generating the PDF
    html2canvas(pdfPreview).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 10, 10);
        pdf.save("account_details.pdf");
    });
});
