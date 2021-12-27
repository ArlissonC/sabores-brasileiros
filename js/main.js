// Slide pratos populares
let dishes = document.querySelector('.dishes');

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
              <button type="button" onclick="addCart('${item.prato}', 
              '${item.preco}', ${index})">Add ao carrinho</button>
            </div>
          </div>
        </div>
    `;
    box = document.querySelectorAll('.box');
  })
}

// const addCart = (produto, valor, posicao) => {
//   localStorage.setItem("produto" + posicao, produto);
//   localStorage.setItem("valor" + posicao, valor);
//   alert("Produto adicionado ao carrinho!");
// }

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
