
function includeHTML(file, elementId) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Include file not found");
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(err => console.error("Error loading include file:", err));
}

document.addEventListener("DOMContentLoaded", function () {
  includeHTML("assets/include/header.html ", "header");
  includeHTML("assets/include/footer.html", "footer");
});
