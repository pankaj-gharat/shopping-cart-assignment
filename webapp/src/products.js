console.log("load project js");
LoadPosts();
function LoadPosts() {
  fetch("http://localhost:5000/products")
    .then((response) => response.json())
    .then((responsePosts) => {
      console.log(responsePosts);
      var grocerry=responsePosts.splice(0, 5);
      var bakery=responsePosts.splice(0, 4);
      var bevarges=responsePosts.splice(0, 4);
      var health=responsePosts.splice(0, 5);
       var babycare=responsePosts;
       loadGrocerry(grocerry);
       loadBakery(bakery);
       loadBevarges(bevarges);
       loadHealthy(health);
       loadBabyCare(babycare);
    
    })
    // .catch(function (err) {
    //   let header = document.querySelector(".header");
    //   header.innerHTML = err;
    //   header.style.color = "red";
    // });
}

function loadGrocerry(Groccery) {

  let tab ="";
  for (let r of Groccery) {
    let data={
      name:r.name,
      image:r.imageURL,
      price:r.price
    }
    const miny = JSON.stringify(data);
    console.log("logdata",miny);
   tab += `<div class="productBox">
<h1>${r.name}s</h1>
<div class="prodImage">
  <img
    src=".${r.imageURL}"
    alt="imgProduct"
    width="50%"
  />
  <div class="prodDesc">
 ${r.description}
  </div>
</div>
<button class="AddButton" onClick="addtoCart( '${r.name},${r.price}')">Buy Now @ ${r.price}</button>
</div>`;
}
document.getElementById("theGrocerryList").innerHTML = tab;
}

function loadBakery(product) {
  let tab ="";
  for (let r of product) {
    tab += `<div class="productBox">
<h1>${r.name}s</h1>
<div class="prodImage">
  <img
    src=".${r.imageURL}"
    alt="imgProduct"
    width="50%"
  />
  <div class="prodDesc">
 ${r.description}
  </div>
</div>
<button class="AddButton">Buy Now @ ${r.price}</button>
</div>`;
}
document.getElementById("theBakeryList").innerHTML = tab;
}

function loadBevarges(product) {
  let tab ="";
  for (let r of product) {
    tab += `<div class="productBox">
<h1>${r.name}s</h1>
<div class="prodImage">
  <img
    src=".${r.imageURL}"
    alt="imgProduct"
    width="50%"
  />
  <div class="prodDesc">
 ${r.description}
  </div>
</div>
<button class="AddButton">Buy Now @ ${r.price}</button>
</div>`;
}
document.getElementById("theBeveragesList").innerHTML = tab;
}

function loadHealthy(product) {
  let tab ="";
  for (let r of product) {
    tab += `<div class="productBox">
<h1>${r.name}s</h1>
<div class="prodImage">
  <img
    src=".${r.imageURL}"
    alt="imgProduct"
    width="50%"
  />
  <div class="prodDesc">
 ${r.description}
  </div>
</div>
<button class="AddButton">Buy Now @ ${r.price}</button>
</div>`;
}
document.getElementById("theBeautyList").innerHTML = tab;
}

function loadBabyCare(product) {
  let tab ="";
  for (let r of product) {
    tab += `<div class="productBox">
<h1>${r.name}s</h1>
<div class="prodImage">
  <img
    src=".${r.imageURL}"
    alt="imgProduct"
    width="50%"
  />
  <div class="prodDesc">
 ${r.description}
  </div>
</div>
<button class="AddButton">Buy Now @ ${r.price}</button>
</div>`;
}
document.getElementById("theBabyCareList").innerHTML = tab;
}

function addtoCart(r){
  // let a= JSON.stringify(r);
  console.log(r);
  let a=JSON.parse(r)
  console.log("value to pass",a);
  
}