// Handle form submission
document.querySelector("form").addEventListener("submit", e => {
  // Cancel default behavior of sending a synchronous POST request
  e.preventDefault();
  // Send form data to the server with an asynchronous POST request
  const formData = new FormData(e.target);
  fetch("https://localhost:3001/ex3.html", {
    method: "POST",
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("result").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });
});