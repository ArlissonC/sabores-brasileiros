let total = 0;
let items = document.querySelector(".items");

// LocalStorage
const getLocalStorage = () => JSON.parse(localStorage.getItem('dbCart')) || [];
const setLocalStorage = (dbCart) => localStorage.setItem('dbCart', JSON.stringify(dbCart));
const dbItems = getLocalStorage();

// Puxando os items do localStorage e renderizando
const renderItem = (item, index) => {
  items.innerHTML += `
  <li>
  <h3>${item.product}</h3>
  <span class="qtd-cart">${item.amount}</span>
  <span class="price-cart">R$ ${item.price}</span>
  <button class="delete-cart" onclick="deleteProduct(${index})">Remover</button>
</li>
  `
  total += item.price;
  document.querySelector(".total-cart").innerHTML = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 
}

// Deleta o produto
const deleteProduct = (index) => {
  dbItems.splice(index, 1);
  setLocalStorage(dbItems);
  location.reload();
}

// Puxando itens LocalStorage
const getItems = () => {
  dbItems.forEach((item, index) => renderItem(item, index));
}

getItems();
