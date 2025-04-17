// Method to toggle the download list
function toggleDownloadList(language) {
  const downloadList = document.getElementById(language + "-downloads");
  if (downloadList) {
    downloadList.style.display =
      downloadList.style.display === "none" || downloadList.style.display === ""
        ? "block"
        : "none";
  } else {
    console.error(`Download list for ${language} not found.`);
    alert(`No download list available for ${language}.`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const fileViewer = document.getElementById("file-viewer");

  // Handle file link clicks
  const fileLinks = document.querySelectorAll(".download-list a");
  fileLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const fileName = event.target.textContent.trim();
      const fileUrl = event.target.href;

      const userChoice = confirm(
        `Do you want to view the file "${fileName}"? Click 'Cancel' to download.`
      );

      if (userChoice) {
        fileViewer.src = fileUrl;
        modal.style.display = "block";
      } else {
        const anchor = document.createElement("a");
        anchor.href = fileUrl;
        anchor.download = fileName;
        anchor.click();
      }
    });
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      fileViewer.src = "";
    }
  });

  // Toggle download list on language item click
  document.querySelectorAll(".language-item span").forEach((span) => {
    span.addEventListener("click", () => {
      const language = span.textContent.trim(); // Get the language name
      toggleDownloadList(language); // Call the toggle function with the language name
    });
  });

  // Search functionality
  document.getElementById("search-bar").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".language-item").forEach((item) => {
      const language = item.querySelector("span").textContent.toLowerCase();
      item.style.display = language.includes(query) ? "block" : "none";
    });
  });
});

// Close modal on click
document.getElementById("modal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// Plan to implement a file upload functionality
// Uncomment and implement this function when needed
// function uploadFile(language) {
//   const fileInput = document.getElementById(language + "-file");
//   const file = fileInput.files[0];
//   if (file) {
//     // Implement the logic to handle the file upload
//     alert(`File ${file.name} for ${language} uploaded successfully!`);
//   } else {
//     alert("Please select a file to upload.");
//   }
// }
