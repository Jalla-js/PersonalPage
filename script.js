// Array of products
const products = [
  {
      name: "Product 1",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "second-hand"
  },
  {
      name: "Product 2",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 3",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "second-hand"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  {
      name: "Product 4",
      image: "./Assets/Guitar2.jpg", // Replace with actual image URL or path
      status: "refurbished"
  },
  // Add more products as needed
];

const productContainer = document.getElementById('product-container');
const toggleBtn = document.getElementById('toggle-btn');
let isExpanded = false;

// Function to create a product card
function createProductCard(product, isHidden) {
  const card = document.createElement('div');
  card.classList.add('product-card');
  if (isHidden) {
    card.classList.add('hidden');
  }

  const imagePlaceholder = document.createElement('div');
  imagePlaceholder.classList.add('image-placeholder');

  const productImage = document.createElement('img');
  productImage.classList.add('product-image');
  productImage.src = product.image; // Set the actual image URL
  productImage.alt = product.name; // Set alt text for accessibility

  imagePlaceholder.appendChild(productImage);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productName = document.createElement('div');
  productName.classList.add('product-name');
  productName.textContent = product.name;

  const productStatus = document.createElement('div');
  productStatus.classList.add('product-status');
  productStatus.classList.add(product.status);
  productStatus.textContent = product.status.replace('-', ' ');

  const inquireBtn = document.createElement('button');
  inquireBtn.classList.add('inquire-btn');
  inquireBtn.textContent = 'Inquire about this product';

  productInfo.appendChild(productName);
  productInfo.appendChild(productStatus);
  productInfo.appendChild(inquireBtn);

  card.appendChild(imagePlaceholder);
  card.appendChild(productInfo);

  return card;
}

// Function to determine the number of items in the first row
function calculateFirstRowItems() {
// Create a temporary container for measurement
const tempContainer = document.createElement('div');
tempContainer.style.display = 'grid';
tempContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
tempContainer.style.visibility = 'hidden';
tempContainer.style.position = 'absolute';
tempContainer.style.width = '100%';
document.body.appendChild(tempContainer);

// Add a few items to measure the row height
const card = createProductCard(products[0], false);
for (let i = 0; i < 10; i++) {
  tempContainer.appendChild(card.cloneNode(true));
}

const containerWidth = tempContainer.clientWidth;
const cardWidth = tempContainer.children[0].offsetWidth;
const cardsPerRow = Math.floor(containerWidth / cardWidth);

document.body.removeChild(tempContainer);

return cardsPerRow;
}

// Initial render: show only the first row
function renderFirstRowOnly() {
productContainer.innerHTML = ''; // Clear container
const cardsPerRow = calculateFirstRowItems();
let rowCount = 0;

products.forEach((product, index) => {
  const card = createProductCard(product, false);
  productContainer.appendChild(card);

  if (index < cardsPerRow) {
    card.classList.remove('hidden');
  } else {
    card.classList.add('hidden');
  }
});

return cardsPerRow;
}

// Function to handle toggle
function toggleVisibility() {
const hiddenCards = document.querySelectorAll('.product-card.hidden');
hiddenCards.forEach(card => {
  card.style.display = isExpanded ? 'block' : 'none';
});
toggleBtn.textContent = isExpanded ? 'See Less' : 'See More';
}

// Handle toggle button click
toggleBtn.addEventListener('click', () => {
isExpanded = !isExpanded;
toggleVisibility();
});

// Initial render
renderFirstRowOnly();

// Recalculate on window resize
window.addEventListener('resize', () => {
renderFirstRowOnly(); // Re-render the first row
});