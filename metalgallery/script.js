
// ao clicar em adicionar ao carrinho a aba carrinho abre adiciona o item com nome e preço
document.querySelectorAll(".add").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("car-aba").style.display = "flex";
    
      // selecionando o nome e o preço dos produtos e os colocando em variaveis
      let nameElement = button.parentNode.querySelector(".borda div p");
      let name = nameElement ? nameElement.textContent : "";
  
      let priceElement = button.parentNode.querySelector(".valor");
      let price = priceElement ? parseFloat(priceElement.value) || 0 : 0;
  
      // atualizacao do valor total do carrinho
      let totalElement = document.querySelector(".total-valor");
      let currentTotal =
        parseFloat(totalElement.textContent.replace("R$", "")) || 0;
      let newTotal = currentTotal + price;
      totalElement.textContent = `R$${newTotal.toFixed(2)}`;
 
      //criacao do item novo do carrinho
      let divCar = document.getElementById("car-list");
      let newItem = document.createElement("div");
      newItem.classList.add("item");
  
      let itemNameDiv = document.createElement("div");
      itemNameDiv.classList.add("item-name");
  
      let deleteButton = document.createElement("span");
      deleteButton.textContent = "x";
      deleteButton.classList.add("delete");
      itemNameDiv.appendChild(deleteButton);
  
      let itemNameParagraph = document.createElement("p");
      itemNameParagraph.textContent = name;
      itemNameDiv.appendChild(itemNameParagraph);
  
      newItem.appendChild(itemNameDiv);
  
      let priceDiv = document.createElement("div");
      let priceSpan = document.createElement("span");
      priceSpan.textContent = "R$";
  
      let priceInput = document.createElement("input");
      priceInput.classList.add("valor");
      priceInput.setAttribute("type", "text");
      priceInput.setAttribute("disabled", true);
      priceInput.value = price.toFixed(2);
  
      priceDiv.appendChild(priceSpan);
      priceDiv.appendChild(priceInput);
  
      newItem.appendChild(priceDiv);
  
      divCar.appendChild(newItem);
  
      // ao clicar no x o item é deletado e o carrinho diminui o valor do produto retirado
      deleteButton.addEventListener("click", (e) => {
        e.preventDefault();
        divCar.removeChild(newItem);
  
        newTotal -= price;
        totalElement.textContent = `R$${newTotal.toFixed(2)}`;
      });
    });
  });


  // evento quando clicar para fechar a aba carrinho o icone do carrinho aparece
  document.querySelectorAll(".fechar").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("car-aba").style.display = "none";
      document.getElementById("car").style.display = "flex";
    });
  });
  
  // evento quando clicar no carrinho a aba carrinho abre e o icone do carrinho some
  document.querySelectorAll("#car").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("car-aba").style.display = "flex";
      document.getElementById("car").style.display = "none";
    });
  });
  