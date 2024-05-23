// const fetchDataButton = document.getElementById("Fetch");
// const dataDisplay = document.getElementById("data-display");

// fetchDataButton.addEventListener("click", () => {
//   dataDisplay.textContent = "Loading..."; // Display loading message

//   fetch("https://dummyjson.com/posts")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       let formattedData = "";

//       data.posts.forEach((post) => {
//         formattedData += `
//           <h3>Post ID: ${post.id}</h3>
//           <p>Title: ${post.title}</p>
//           <p>Body: ${post.body}</p>
//           <hr>
//         `;
//       });

//       dataDisplay.innerHTML = formattedData; // Display formatted data
//     })
//     .catch((error) => {
//       dataDisplay.textContent = "Error: " + error.message;
//     });
// });
const fetchDataButton = document.getElementById("Fetch");
const dataDisplay = document.getElementById("data-display");

fetchDataButton.addEventListener("click", () => {
  dataDisplay.textContent = "Loading..."; // Display loading message

  const myData = getData(); // promise return
  myData
    .then((data) => {
      alert("hi");
      let formattedData = "";

      data.posts.forEach((post) => {
        formattedData += `<h3>Post ID: ${post.id}</h3>
          <p>Title: ${post.title}</p>
          <p>Body: ${post.body}</p>
          <hr>`;
      });
      dataDisplay.innerHTML = formattedData;
    })
    .catch((error) => {
      dataDisplay.textContent = `${error}`;
    });
});

function getData() {
  alert("Inside Promise");
  // implement
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      alert("no calling");
      reject("Operational Timeout");
    }, 5000);

    setTimeout(() => {
      fetch("https://dummyjson.com/posts")
        .then((data) => {
          alert("calling api");

          if (!data) {
            reject("error");
          }
          const newData = data.json();
          return newData;
        })
        .then((data) => {
          clearTimeout(timer);
          resolve(data);
        });
    }, 50);
  });
}
