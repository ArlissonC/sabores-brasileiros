let total = 0;
let valor = 0;
let itens = document.querySelector(".itens");

for(let i = 1; i<=99; i++) {
  var prod = localStorage.getItem("produto" + i + ""); 
  if (prod != null) {	
    itens.innerHTML += `
    <li>
      <h3>${localStorage.getItem("produto" + i)}</h3>
      <span class="qtd-cart">${localStorage.getItem("qtd" + i)}</span>
      <span class="price-cart">R$ ${localStorage.getItem("valor" + i)}</span>
    </li>
    `
    
    valor = parseFloat(localStorage.getItem("valor" + i)); 
    total += valor;
  } 
} 

document.querySelector(".total-cart").innerHTML = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}); 

