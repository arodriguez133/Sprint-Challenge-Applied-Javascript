// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    
let headerAnchor = document.querySelector('.header-container')

let headerContainer = document.createElement('div')
headerContainer.classList.add('header')

let headerDate = document.createElement('span')
headerDate.classList.add('date')
headerDate.textContent = 'MARCH 28, 2019'

let headerTitle = document.createElement('h1')
headerTitle.textContent = 'Lambda Times'

let headerTemp = document.createElement('span')
headerTemp.classList.add('temp')
headerTemp.textContent = '98°'

headerAnchor.appendChild(headerContainer)
headerContainer.appendChild(headerDate)
headerContainer.appendChild(headerTitle)
headerContainer.appendChild(headerTemp)

return headerAnchor;
}

Header();
