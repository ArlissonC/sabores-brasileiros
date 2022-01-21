let dishes = document.querySelector('.dishes');

// Consumindo API dos pratos
document.addEventListener('DOMContentLoaded', () => {
  fetchData();
})
const fetchData = async () => {
  try {
    const response = await fetch('pratos.json');
    const data = await response.json();
    loadDishes(data);
    menuDishes(data);
  } catch (error) {
    console.log(error);
  }
}

// Renderiza os pratos populares
const loadDishes = data => {
  data.forEach((item, index) => {
    dishes.innerHTML += `
      <div class="box">
        <div class="img">
          <img src="${item.img}" alt="">
          <h4>${item.prato}</h4>
          <img src="${item.stars}" alt="">
          <p>${item.descricao}</p>
          <div class="add-cart">
            <span>${item.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            <div class="buttons-input">
              <button class="btn-sub" type="button" onclick="this.parentNode.querySelector('[type=number]').stepDown();">-</button>
              <input id="qtd${index}" type="number" name="number" min="1" max="100" value="1">
              <button class="btn-add" type="button" onclick="this.parentNode.querySelector('[type=number]').stepUp();">+</button>
            </div>
            <button class="cart" onclick="addCart('${item.prato}', document.getElementById('qtd${index}').value, '${item.preco}', ${index})"></button>
          </div>
        </div>
      </div>
    `;
    box = document.querySelectorAll('.box');
  })
}

// Slide pratos populares
let btnPrevious = document.querySelector('.previous');
let btnNext = document.querySelector('.next');

btnNext.addEventListener('click', () => {
  dishes.appendChild(box[0]);
  box = document.querySelectorAll('.dishes > .box');
});

btnPrevious.addEventListener('click', () => {
  const lastItem = box[box.length -1];
  dishes.insertBefore( lastItem, box[0]);
  box = document.querySelectorAll('.dishes > .box');
});

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbCart')) || [];
const setLocalStorage = (dbCart) => localStorage.setItem('dbCart', JSON.stringify(dbCart));
 
// Adiciona os itens ao carrinho
const addCart = (produto, qtd, valor, posicao) => {
  const product = produto;
  const amount = qtd;
  valor = valor * qtd;
  const price = valor;
  const position = posicao;
  const dataObj = {product, amount, price, position}
  const dbCart = getLocalStorage();
  checkCart(dbCart, dataObj, position);
}

// Verifica se já existe no carrinho
const checkCart = (array, dataObj, position) => {
  const pos = array.map(e => e.position)
  if (pos.indexOf(position) != -1) {
    alert('Este produto já está no carrinho!');
  } else {
    alert('Produto adicionado ao carrinho!')
    array.push(dataObj);
    setLocalStorage(array);
  }
}
