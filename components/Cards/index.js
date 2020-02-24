// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        // console.log(response);
        Object.values(response.data.articles).forEach(articleTopic => {
            articleTopic.forEach(article => {
                let cards = document.querySelector(".cards-container");
                cards.append(createCard(article));
            })
        })
    })
    .catch(error => {
        console.log(error);
    })

function createCard(data) {

    let cardContainer = document.createElement('div')
    cardContainer.classList.add('card')

    let cardHeadline = document.createElement('div')
    cardHeadline.classList.add('headline')
    cardHeadline.textContent = data.headline

    let cardAuthor = document.createElement('div')
    cardAuthor.classList.add('author')

    let cardImg = document.createElement('div')
    cardImg.classList.add('img-container')

    let cardImgSrc = document.createElement('img')
    cardImgSrc.src = data.authorPhoto

    let cardAuthorName = document.createElement('span')
    cardAuthorName.textContent = data.authorName

    cardContainer.appendChild(cardHeadline)
    cardContainer.appendChild(cardAuthor)

    cardAuthor.appendChild(cardImg)
    cardImg.appendChild(cardImgSrc)
    cardAuthor.appendChild(cardAuthorName)

    return cardContainer;
} 
