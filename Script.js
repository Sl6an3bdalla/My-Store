document.getElementById("user").innerHTML = localStorage.getItem("user");

function logout() {
  if (confirm("Please dont leave ")) {
  } else {
    location.replace("index.html");
    localStorage.clear();
  }
}

localStorage.setItem("numPro", 0);
var x;
function addPro() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("numPro").innerHTML = localStorage.clickcount;
  }
}
function fillterdProducts() {
  var search_input = document.getElementById("searchBox").value;
  document.getElementById("items").innerHTML = "";
  displayProducts(
    productsData.filter(data => {
      var lowerCaseProduct = data.name.toLowerCase();
      return lowerCaseProduct.includes(search_input);
    })
  );
}

function color() {
  document.getElementById("items").innerHTML = "";
  red();
  black();
  blue();
}
function red() {
  if (document.getElementById("red").checked) {
    displayProducts(
      productsData.filter(data => {
        var colors = data.color;
        return colors.includes("red");
      })
    );
  }
}
function black() {
  if (document.getElementById("black").checked) {
    displayProducts(
      productsData.filter(data => {
        var colors = data.color;
        return colors.includes("black");
      })
    );
  }
}
function blue() {
  if (document.getElementById("blue").checked) {
    displayProducts(
      productsData.filter(data => {
        var colors = data.color;
        return colors.includes("blue");
      })
    );
  }
}

function brand() {
  document.getElementById("items").innerHTML = "";
  afe();
  kn();
  sb();
  ddr();
}

function afe() {
  if (document.getElementById("afe").checked) {
    displayProducts(
      productsData.filter(data => {
        var brand = data.brand;
        return brand.includes("afe");
      })
    );
  }
}

function kn() {
  if (document.getElementById("kn").checked) {
    displayProducts(
      productsData.filter(data => {
        var brand = data.brand;
        return brand.includes("kn");
      })
    );
  }
}

function sb() {
  if (document.getElementById("sb").checked) {
    displayProducts(
      productsData.filter(data => {
        var brand = data.brand;
        return brand.includes("SB");
      })
    );
  }
}

function ddr() {
  if (document.getElementById("ddr").checked) {
    displayProducts(
      productsData.filter(data => {
        var brand = data.brand;
        return brand.includes("ddr");
      })
    );
  }
}
function price() {
  document.getElementById("items").innerHTML = "";
  displayProducts(
    productsData.filter(data => {
      var price = data.price;
      return price < slider.value;
    })
  );
}

// function filter() {
//   document.getElementById("items").innerHTML = "";
//   color();
//   //price();
//   //brand();
// }

var productsData;

fetch("./products.json")
  .then(response => response.json())
  .then(data => {
    productsData = data;
    displayProducts(data);
  });

function displayProducts(data) {
  for (let value of data) {
    var div = document.createElement("div");
    div.setAttribute("class", "item");

    var img = document.createElement("img");
    img.setAttribute("src", value.imgURL);
    img.setAttribute("width", "60%");
    img.setAttribute("height", "50%");
    div.appendChild(img);

    var proName = document.createElement("h5");
    proName.setAttribute("class", "view");
    proName.setAttribute("title", "view");
    proName.innerHTML = value.name;
    div.appendChild(proName);

    var buy = document.createElement("span");
    buy.setAttribute("class", "buy");
    buy.setAttribute("onclick", "addPro()");
    buy.innerHTML = "Buy this Product";
    div.appendChild(buy);

    var price = document.createElement("span");
    price.innerHTML = value.price;
    div.appendChild(price);

    document.getElementById("items").appendChild(div);
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};
