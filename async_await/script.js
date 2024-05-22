const fetchDataContainer = document.getElementById("data-container");
const loadingSpinner = document.getElementById("loading-spinner");
const fetchDataButton = document.getElementById("Fetch");

fetchDataButton.addEventListener("click", async () => {
  fetchDataContainer.textContent = ""; // Clear the container

  // Disable button and show spinner
  fetchDataButton.disabled = true;
  loadingSpinner.style.display = "block";

  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();

    let formattedData = "";

    data.posts.forEach((post) => {
      formattedData += `
          <h3>Post ID: ${post.id}</h3>
          <p>Title: ${post.title}</p>
          <p>Body: ${post.body}</p>
          <hr>
        `;
    });

    fetchDataContainer.innerHTML = formattedData;
  } catch (error) {
    fetchDataContainer.textContent = `Error: ${error.message}`;
  } finally {
    fetchDataButton.disabled = false;
    loadingSpinner.style.display = "none";
  }
});
