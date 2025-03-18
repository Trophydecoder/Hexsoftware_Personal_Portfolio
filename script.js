   // Open the side navigation
   function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

// Close the side navigation
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1-oewf-ecxdPxfHDFkzT1WKW3mXKLLBXe/view?usp=drive_link';  // Change this to your actual resume file URL
    link.download = 'Sithembiso Mdawe CV.pdf'; // Change this to your preferred file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }