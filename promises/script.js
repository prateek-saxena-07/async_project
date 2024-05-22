const fetchDataButton = document.getElementById("Fetch");
const dataDisplay = document.getElementById("data-display");

fetchDataButton.addEventListener("click", () => {
  dataDisplay.textContent = "Loading..."; // Display loading message

  fetch("https://dummyjson.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      let formattedData = "";

      data.posts.forEach((post) => {
        formattedData += `
          <h3>Post ID: ${post.id}</h3>
          <p>Title: ${post.title}</p>
          <p>Body: ${post.body}</p>
          <hr>
        `;
      });

      dataDisplay.innerHTML = formattedData; // Display formatted data
    })
    .catch((error) => {
      dataDisplay.textContent = "Error: " + error.message;
    });
});
