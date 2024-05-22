const button = document.getElementById("Button");
const Data = document.getElementById("Display-Div");
//Fetching and displaying Data using  Callbacks

const render = (response) => {
  if (!response.ok) {
    return (Data.textContent = `Error fetching data: ${response.statusText}`);
  }
  response.json().then((data) => {
    console.log(data);
    let formattedData = "";

    data.posts.forEach((post) => {
      formattedData += `
          <h3>Post ID: ${post.id}</h3>
          <p>Title: ${post.title}</p>
          <p>Body: ${post.body}</p>
          <hr>
        `;
    });
    Data.innerHTML = formattedData;
  });
};

const callback = (render) => {
  Data.textContent = "Content will load after 5 Seconds...";

  //Setting timeout for 5 Seconds Delay
  setTimeout(() => {
    fetch("https://dummyjson.com/posts").then((response) => {
      render(response);
    });
  }, 5000);
};

button.addEventListener("click", () => {
  //callbacks
  callback(render);
});
