const products = [
  { name: 'Laptop', price: 900, category: 'Electronics' },
  { name: 'Smartphone', price: 600, category: 'Electronics' },
  { name: 'Book - JS', price: 30, category: 'Books' },
  { name: 'Book - CSS', price: 25, category: 'Books' }
];

const list = document.getElementById('productList');
const category = document.getElementById('categoryFilter');
const sort = document.getElementById('sort');

function render() {
  let filtered = products.filter(p => !category.value || p.category === category.value);
  filtered.sort((a, b) => sort.value === 'asc' ? a.price - b.price : b.price - a.price);
  list.innerHTML = '';
  filtered.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.name} - $${p.price}`;
    list.appendChild(li);
  });
}

category.onchange = render;
sort.onchange = render;

render();