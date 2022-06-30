window.onload = function () {
  var productList = document.getElementById("product-list");
  var li = localStorage.getItem("someName", listItem);
  productList.appendChild(li);
};
