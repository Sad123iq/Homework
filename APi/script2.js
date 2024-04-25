const list = document.getElementById("list");
const azBtn = document.getElementById("azBtn");
const zaBtn = document.getElementById("zaBtn");
const defBtn = document.getElementById("def");
const azdanBtn = document.getElementById("azdanCoxaBtn")
const coxdanBtn = document.getElementById("coxdanazaBtn")

function viewCard(products) {
  list.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h3");
    title.textContent = products[i].title;

    let price = document.createElement("p");
    price.textContent = products[i].price;
    price.classList.add("price");

    let description = document.createElement("p");
    description.textContent = products[i].description;

    card.append(title, price, description);
    list.append(card);

  }
}

fetch("https://fakestoreapi.com/products")
  .then((resp) => resp.json())
  .then((data) => {
    viewCard(data);
  });

azBtn.addEventListener("click", ()=>{
    list.innerHTML=``
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let sortedProducts = [...data];
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      viewCard(sortedProducts);    
    });
  console.log("A-Z");
});

zaBtn.addEventListener("click", ()=>{
    list.innerHTML=``
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let sortedProducts = [...data];
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      viewCard(sortedProducts);    
    });
  console.log("Z-A");
});

// azdanBtn.addEventListener("click", ()=>{
//     list.innerHTML=``
//     fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//       let sortedProducts = [...data];
//       sortedProducts.sort((a, b) => a.price.localeCompare(b.title));
//       viewCard(sortedProducts);    
//     });
//   console.log("123");
// });

// coxdanBtn.addEventListener("click", ()=>{
//     list.innerHTML=``
//     fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => {
//       let sortedProducts = [...data];
//       sortedProducts.sort((a, b) => b.price.localeCompare(a.title));
//       viewCard(sortedProducts);    
//     });
//   console.log("123");
// });

defBtn.addEventListener("click", () => {
    list.innerHTML = ``;
    fetch("https://fakestoreapi.com/products")
      .then((resp) => resp.json())
      .then((data) => {
        viewCard(data);
      });
      console.log("Default");
  });