export let products = [];

const url = 'https://api.pokemontcg.io/v2/cards?q='

async function fetchData(query = 'set.id:sv7'){
  const response = await fetch(`${url}${encodeURIComponent(query)}`, { headers: {'X-Api-Key' : '226adf21-60c4-45d4-a3e1-603b6be32acf'}});
  const data = await response.json();
  const cards = data.data;
  products = cards;
}

await fetchData();

await Promise.all([
  renderHeader(),
  renderProductGrid()
])

function renderHeader(){
  document.querySelector('.navbar').innerHTML = `     <div class="navbar-left-section">
      <a href="index.html" class="header-link">
        <img class="logo" src="images/logo.png">
      </a>
    </div>

    <div class="navbar-middle-section">
      <input class="search-bar" type="text" placeholder="Search....">

      <button class="search-button">
        <img class="search-icon" src="images/search-icon.png">
      </button>
    </div>

    <div class="navbar-right-section">
      <a href="#" class="header-link order-link">Sign In</a>
      <a href="#" class="header-link order-link">Sell With Us</a>
      <a href="#" class="header-link order-link">
        <i class="fas fa-user user-icon"></i>
      </a>
      <a class="cart-link header-link order-link" href="#">
        <i class="fas fa-shopping-cart cart-icon"></i>
        <div class="cart-quantity js-cart-quantity">3</div>
      </a>
    </div>
  `
}

function renderProductGrid(){
  let productsHTML = '';

  products.forEach((product) => {
  const price =
    product.tcgplayer?.prices?.holofoil?.directLow ||
    product.tcgplayer?.prices?.normal?.directLow ||
    product.cardmarket?.prices?.trendPrice ||
    0; 

    const marketPrice = product.tcgplayer?.prices?.holofoil?.market ||
    product.tcgplayer?.prices?.normal?.market ||
    product.cardmarket?.prices?.averageSellPrice ||
    0; 


    productsHTML += `
      <div class="product-container" onclick="window.location.href='../product.html'">
        <div class="product-image-container">
          <img class="product-image" src="${product.images.small}">
        </div>

        <div class="product-details">

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-set">
            ${product.set.id.toUpperCase()}: ${product.set.name}
          </div>

          <div class="product-list-count">
            ${Math.round(Math.random() * 10)} listings from
          </div>

          <div class="product-price">
            $${price == 0 ? "OUT OF STOCK" : price}
          </div>

          <div class="product-market-price">
            <strong>Market Price:</strong> $${marketPrice == 0  ? "OUT OF STOCK" : marketPrice}
          </div>
        </div>
      </div>
    `

    document.querySelector('.js-products-grid').innerHTML = productsHTML;
  })
}

const inputEl = document.querySelector('.search-bar')
const inputBtnEl = document.querySelector('.search-button')

inputBtnEl.addEventListener('click' , async () => {
  if(inputEl.value.trim() === ""){
    return;
  }

  const searchInput = inputEl.value.trim().toLowerCase();
  const query = `name:${searchInput}`

  products = [];
  await fetchData(query);
  await renderProductGrid();
})
