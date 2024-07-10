/*fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=25b6f280bb734c7caa5b26785fc98335')
  .then(response => response.json())
  .then(data => {
    data.articles.forEach(article => {
      console.log(article.title);
      console.log(article.description);
    });
  })
  .catch(error => console.error('Error:', error));*/

  /*fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=25b6f280bb734c7caa5b26785fc98335')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));*/
/*
  fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25b6f280bb734c7caa5b26785fc98335')
  .then(response => response.json())
  .then(data => {
    data.articles.forEach(article => {
      console.log(article.title);
    });
  })
  .catch(error => console.error('Error:', error));*/

  
  fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=25b6f280bb734c7caa5b26785fc98335')
  .then(response => response.json())
  .then(data => {
    data.articles.forEach(article => {
      console.log(article.title);
      console.log(article.description);
      console.log(article.urlToImage);
    });
  })
  .catch(error => console.error('Error:', error));

