let menuArray = [
  {
    name: "Pizza",
    ingredients: ["pepperoni", "mushrom", "mozarella"],
    id: 0,
    price: 14,
    emoji: "🍕",
    isOrdered: false,
    image: "./images/pizza.png",
  },
  {
    name: "Hamburger",
    ingredients: ["beef", "cheese", "lettuce"],
    price: 12,
    emoji: "🍔",
    id: 1,
    isOrdered: false,
    image: "./images/hamburger.png",
  },
  {
    name: "Beer",
    ingredients: ["grain, hops, yeast, water"],
    price: 12,
    emoji: "🍺",
    id: 2,
    isOrdered: false,
    image: "./images/beer.png",
  },
  {
    name: "Cake",
    ingredients: ["cream,sugar,egg"],
    price: 24,
    id: 3,
    image: "./images/cake.jpg",
  },
  {
    name: "Laddu",
    ingredients: ["sugar,wheat"],
    id: 4,
    price: 18,
    image: "./images/laddu.jpg",
  },
  {
    name: "Lassi",
    ingredients: ["Banana,curd"],
    id: 5,
    price: 8,
    image: "./images/lassi.jpg",
  },
];

// import { menuArray } from "/data.js";
// console.log(menuArray)

let totalOrderObj = [];

// Know the object in the Array

function knowObj(id) {
  let reqObj = menuArray.filter(function (menu) {
    return `${menu.id}` === id;
  })[0];
  return reqObj;
}

let eachHtml = ``;

function displayTotalOrders(id) {
  document.getElementById("section").style.display = "block";
  let reqObj = knowObj(id);
  total = total + reqObj.price;
  eachHtml += `
    <div class="moderator">
        <div class="order-box">
            <h2>${reqObj.name}</h2>
            <button>remove</button>
        </div>
        <h3>${reqObj.price}</h3>
    </div>
        `;
  document.getElementById("orders").innerHTML = eachHtml;
  document.getElementById("total-price").innerHTML = total;
}

// Event Listeners

document.addEventListener("click", function (e) {
  if (e.target.id === "0") {
    // displayTotalOrders(e.target.id)
    addOrderedMenu(e.target.id);
  } else if (e.target.id === "1") {
    // displayTotalOrders(e.target.id)
    addOrderedMenu(e.target.id);
  } else if (e.target.id === "2") {
    // displayTotalOrders(e.target.id)
    addOrderedMenu(e.target.id);
  } else if (e.target.id === "3") {
    // displayTotalOrders(e.target.id)
    addOrderedMenu(e.target.id);
  } else if (e.target.id === "4") {
    // displayTotalOrders(e.target.id)
    addOrderedMenu(e.target.id);
  } else if (e.target.id === "5") {
    // displayTotalOrders(e.target.id)
    addOrderedMenu(e.target.id);
  }
});

function addOrderedMenu(id) {
  let knowMenu = knowObj(id);
  pushObj(knowMenu);
  renderOrderedFood(totalOrderObj);
}

function pushObj(knowMenu) {
  let contains = true;
  totalOrderObj.forEach(function (singular) {
    if (singular.id === knowMenu.id) {
      contains = false;
    }
  });

  if (contains) {
    totalOrderObj.push(knowMenu);
  }
}

document.addEventListener("click", function (e) {
  if (e.target.id === `remove-0`) {
    removeOrder(e.target.id);
  } else if (e.target.id === `remove-1`) {
    removeOrder(e.target.id);
  } else if (e.target.id === `remove-2`) {
    removeOrder(e.target.id);
  } else if (e.target.id === `remove-3`) {
    removeOrder(e.target.id);
  } else if (e.target.id === `remove-4`) {
    removeOrder(e.target.id);
  } else if (e.target.id === `remove-5`) {
    removeOrder(e.target.id);
  }
});

function knowObjremove(id) {
  return totalOrderObj.filter(function (param) {
    return `remove-${param.id}` === id;
  });
}

function removeOrder(id) {
  let i = 0;
  totalOrderObj.forEach(function (singular) {
    if (id === `remove-${singular.id}`) {
      console.log(true);
      totalOrderObj.splice(i, 1);
    }
    i = i + 1;
  });
  // console.log(totalOrderObj)
  renderOrderedFood();
}

function renderOrderedFood() {
  document.getElementById("section").style.display = "block";
  let html = ``;
  let total = 0;
  if (totalOrderObj.length === 0) {
    document.getElementById("section").style.display = "none";
  }
  totalOrderObj.forEach(function (eachMenu) {
    html += `
        <div class="moderator">
        <div class="order-box">
        <h2>${eachMenu.name}</h2>
        <button id="remove-${eachMenu.id}">remove</button>
        </div>
        <h3>${eachMenu.price}</h3>
        </div>`;
    total = total + eachMenu.price;
  });
  document.getElementById("orders").innerHTML = html;
  document.getElementById("total-price").innerHTML = total;
}

document.getElementById("submit-order").addEventListener("click", function () {
  document.getElementById("form").style.display = "block";
});

function displaySpan(name) {
  document.getElementById("form-name").innerHTML = name;
}

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let formdata = document.getElementById("form");
  const formName = new FormData(formdata);
  const name = formName.get("names");
  displaySpan(name);
  document.getElementById("section").style.display = "none";
  setTimeout(() => {
    document.getElementById("end").style.display = "block";
  }, 1500);
  document.getElementById("form").style.display = "none";
});

function totalOrder() {
  let html = ``;

  menuArray.forEach((menu) => {
    html += `
        <div class="each-menu" id="each-menu">
            <div class="each-menu-info" id="each-menu-info">
                <img src="${menu.image}" class="image" id="image">
                <div class="info" id="info">
                    <h1>${menu.name}</h1>
                    <p class="ingredients">${menu.ingredients}</p>
                    <h4>${menu.price}</h4>
                </div>
            </div>
            <div class="add" id="add">
                <i class="fa-solid fa-plus" id="${menu.id}"></i>
            </div>
        </div>
        `;
  });
  return html;
}
function render() {
  document.getElementById("main").innerHTML = totalOrder();
}

render();
