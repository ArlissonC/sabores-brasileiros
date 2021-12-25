let menu = document.querySelector('.menu-dishes');
const buttonsMenu = document.querySelectorAll('.btn');

const menuDishes = data => {
  data.forEach((item, index)=> {
    menu.innerHTML += `
    <div class="box ${item.regiao}">
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
    `
  });
}

const filterSelect = region => {
  if (region == "all") {
    region = "";
  }
  document.querySelectorAll('.box').forEach(item => {
    item.classList.remove('hidden');
    if (!(item.className.indexOf(region) > -1)) {
      item.classList.add('hidden');
    }
  });
}

