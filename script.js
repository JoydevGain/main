// JavaScript code to trigger download when the button is clicked
document.getElementById('downloadButton').addEventListener('click', function() {
    // Create a link element
    var downloadLink = document.createElement('a');
    downloadLink.href = "jj1.jpg"; // Replace with the actual file path or URL

    // Set the download attribute to specify the filename
    downloadLink.download = "Jj1.jpg"; // Replace with the desired filename

    // Append the link to the document and trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
