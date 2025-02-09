document.addEventListener("DOMContentLoaded", function () {
  let searchBox = document.getElementById("search-box");
  let resultsContainer = document.getElementById("results");

  fetch("/search.json")
    .then(response => response.json())
    .then(posts => {
      searchBox.addEventListener("input", function () {
        let query = this.value.toLowerCase();
        resultsContainer.innerHTML = "";

        let filteredPosts = posts.filter(post => 
          post.title.toLowerCase().includes(query) || 
          post.content.toLowerCase().includes(query)
        );

        filteredPosts.forEach(post => {
          let li = document.createElement("li");
          li.innerHTML = `<a href="${post.url}">${post.title}</a>`;
          resultsContainer.appendChild(li);
        });
      });
    });
});
