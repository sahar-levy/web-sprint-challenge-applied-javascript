import axios from 'axios';

const Card = (article) => {
  // Create elements
  const cardsContainer = document.createElement('div');
  const card = document.createElement('div');
  const articleHeadline = document.createElement('div');
  const authorInfo = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  // Add classes
  cardsContainer.classList.add('cards-container');
  card.classList.add('card');
  articleHeadline.classList.add('headline');
  authorInfo.classList.add('author');
  imgContainer.classList.add('img-container');

  // Set content
  articleHeadline.textContent = article.headline;
  authorName.textContent = article.authorName;

  // Set image attributes
  img.src = article.authorPhoto;
  img.alt = article.authorName;

  // Construct hierarchy
  cardsContainer.appendChild(card);
  card.appendChild(articleHeadline);
  card.appendChild(authorInfo);
  authorInfo.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorInfo.appendChild(authorName);

  // Add click event listener
  card.addEventListener('click', () => {
    console.log(article.headline);
  });

  return cardsContainer;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5001/api/articles')
    .then(resp => {
      // console.log(resp);
      const articles = resp.data.articles;
      // console.log(articles.javascript);

      articles.javascript.forEach(article => {
        const cardElement = Card(article);

        const targetElement = document.querySelector(selector);

        targetElement.appendChild(cardElement);
      });

      articles.bootstrap.forEach(article => {
        const cardElement = Card(article);

        const targetElement = document.querySelector(selector);

        targetElement.appendChild(cardElement);
      });

      articles.technology.forEach(article => {
        const cardElement = Card(article);

        const targetElement = document.querySelector(selector);

        targetElement.appendChild(cardElement);
      });

      articles.jquery.forEach(article => {
        const cardElement = Card(article);

        const targetElement = document.querySelector(selector);

        targetElement.appendChild(cardElement);
      });

      articles.node.forEach(article => {
        const cardElement = Card(article);

        const targetElement = document.querySelector(selector);

        targetElement.appendChild(cardElement);
      });

    })
    .catch(err => console.log(err));

    return cardAppender;
}

export { Card, cardAppender }
