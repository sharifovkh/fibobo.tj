var menu = document.querySelector(".menu");

function menuPhone() {
   if(menu.style.transform == "scale(0)"){
      menu.style.transform = "scale(1)"
   }else{
      menu.style.transform = "scale(0)"
   }
};


function cart() {
   var cart = document.querySelector (".addToCart");
   if(cart.style.transform == "scale(0)"){
      cart.style.transform = "scale(1)"
   }else{
      cart.style.transform = "scale(0)"
   }
};

var productMuch = document.querySelector (".CartMuch");
var productMuch2 = document.querySelector (".CartMuch2");
var delate = document.querySelector (".forDel");
var delate2 = document.querySelector (".forDel2");
var price1 = document.querySelector (".price1");
var price2 = document.querySelector (".price2");
var allPrice = document.querySelector (".allMoney");
var quantitys = 1;
var money = 120;
var allMoney = 240;

function addMinus() {
   money = money - 120;
   allMoney = allMoney - 120;
   quantitys = quantitys - 1;
   productMuch.innerText = "" + quantitys;
   price1.innerText = "" + money + "$";
   allPrice.innerText = "" + allMoney + "$";
};

function addPlus() {
   money = money + 120;
   allMoney = allMoney + 120;
   quantitys = quantitys + 1;
   productMuch.innerText = "" + quantitys;
   price1.innerText = "" + money + "$";
   allPrice.innerText = "" + allMoney + "$";
};

function addMinus2() {
   money = money - 120;
   allMoney = allMoney - 120;
   quantitys = quantitys - 1;
   productMuch2.innerText = "" + quantitys;
   price2.innerText = "" + money + "$";
   allPrice.innerText = "" + allMoney + "$";
};

function addPlus2() {
   money = money + 120;
   allMoney = allMoney + 120;
   quantitys = quantitys + 1;
   productMuch2.innerText = "" + quantitys;
   price2.innerText = "" + money + "$";
   allPrice.innerText = "" + allMoney + "$";
};

function del() {
   delate.style.display = "none";
};


function del2() {
   delate2.style.display = "none";
};


function AddToCart() {
   var producta = document.querySelector (".producta");
   producta.style.transform = "scale(1)"     
};

function closeProduct() {
   var producta = document.querySelector (".producta");
   producta.style.transform = "scale(0)"     
};


function addCart() {
   var plusToCart = document.getElementById ("Addcart");
   var curentCart = 1;
   curentCart = curentCart + 1;
   plusToCart.innerText = "" + curentCart;
};

var payCard__box = document.querySelector (".payCard");
var payCard = document.querySelector ("#payCard");
var nalichi = document.querySelector ("#nalichi");

payCard.onclick = function() {
   payCard__box.style.display = "block";
}

nalichi.onclick = function() {
   payCard__box.style.display = "none";
};


function openRegistration() {
   const registration = document.querySelector (".registration");
   registration.style.transform = "scale(1)";
};

function closeRegistration() {
   const registration = document.querySelector (".registration");
   registration.style.transform = "scale(0)";
};



