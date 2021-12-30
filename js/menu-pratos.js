let menu = document.querySelector('.menu-dishes');
const buttonsMenu = document.querySelectorAll('.btn');

// Renderiza o Menu
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
            <div class="buttons-input">
              <button class="btn-sub" type="button" onclick="this.parentNode.querySelector('[type=number]').stepDown();">-</button>
              <input class="qtd${index}" type="number" name="number" min="1" max="100" value="1">
              <button class="btn-add" type="button" onclick="this.parentNode.querySelector('[type=number]').stepUp();">+</button>
            </div>
            <button class="cart" onclick="addCart('${item.prato}', document.querySelector('.qtd${index}').value, '${item.preco}', ${index})"></button>
          </div>
        </div>
      </div>
    `
  });
}

// Filtra por região
const filterSelect = region => {
  if (region == "all") {
    region = "";
  }
  document.querySelectorAll('.menu-dishes > .box').forEach(item => {
    item.classList.remove('hidden');
    if (!(item.className.indexOf(region) > -1)) {
      item.classList.add('hidden');
    }
  });
}
