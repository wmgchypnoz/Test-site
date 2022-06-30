const switcher = document.getElementById("productType");
const review = document.getElementById("product-review");
var SKU = document.getElementById("sku");
const DVD = document.getElementById("DVD");
const book = document.getElementById("Book");
const furniture = document.getElementById("Furniture");
const saveBtn = document.getElementById("saveBtn");
let productName = document.getElementById("name");
let price = document.getElementById("price");
let size = document.getElementById("size");
let height = document.getElementById("height");
let width = document.getElementById("width");
let length = document.getElementById("length");
let weight = document.getElementById("weight");

//type swircher//

switcher.addEventListener("change", () => {
  if (switcher.value == `DVD`) {
    review.innerText = `Please, provide size in MB format`;
    SKU.value = `JVC200123`;
    DVD.style.background = "#00a7ff";
    book.style.background = "none";
    furniture.style.background = "none";
  }
});

switcher.addEventListener("change", () => {
  if (switcher.value == `Book`) {
    review.innerText = `Please, provide weight in KG format`;
    SKU.value = `GGWP0007`;
    DVD.style.background = "none";
    book.style.background = "#00a7ff";
    furniture.style.background = "none";
  }
});

switcher.addEventListener("change", () => {
  if (switcher.value == `Furniture`) {
    review.innerText = `Please, provide dimensions in HxWxL format`;
    SKU.value = `TR120555`;
    DVD.style.background = "none";
    book.style.background = "none";
    furniture.style.background = "#00a7ff";
  }
});

//save button//

saveBtn.addEventListener("click", () => {
  if (productName.value) {
    var listItem = document.createElement("li");
    listItem.innerText = productName.value + price.value + size.value;
    localStorage.setItem("someName", listItem);
    window.location.href = "./index.html";
  }
});
