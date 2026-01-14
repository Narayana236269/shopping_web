var category = document.getElementById("category");
var products = document.getElementById("elements");
var category_insert = "";
var image_insert = "";
var insert_category = new Set();
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then(function (data) {
    data.forEach(function (inp_prod) {
      insert_category.add(inp_prod.category);
    });
    insert_category.forEach(function (items) {
      category_insert += `  <ul class="category-list" id="category">
 <li>${items}</li> `;
      category.innerHTML = category_insert;
    });

    for (let i = 0; i < data.length; i++) {
      image_insert = ` <div class="elements" id="elements"> <div class="prod_info"><img src="${data[i].image}">
      <p id="discrip">${data[i].category}</p>
     <p id="price">${data[i].price} </p></div>`;
      products.innerHTML += image_insert;
    }
    console.log(data);
  });
