// This is my model and it handles on the service calls
var homeContent = `<div class="homepage">
<div class="homehero">
  <div class="homeherotext">
    <p class="homeherotexttop">A PLACE IS <br />IS NOT A PLACE</p>
    <p>UNTIL IT HAS A BOOKSTORE</p>
  </div>
</div>
</div>
<div class="homepage2">
<div class="homebookscont">
  <div class="book1cont">
    <div class="book1img"></div>
    <div class="book1text">
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        Urna nunc id cursus metus aliquam eleifend mi. Massa vitae
        tortor condimentum lacinia quis vel eros.
      </p>
    </div>
    <div class="book1price">
      <p>$15.99</p>
    </div>
    <button class="addtocart">ADD TO CART</button>
  </div>

  <div class="book1cont">
    <div class="book2img"></div>
    <div class="book1text">
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        Urna nunc id cursus metus aliquam eleifend mi. Massa vitae
        tortor condimentum lacinia quis vel eros.
      </p>
    </div>
    <div class="book1price">
      <p>$25.99</p>
    </div>
    <button class="addtocart">ADD TO CART</button>
  </div>

  <div class="book1cont">
    <div class="book3img"></div>
    <div class="book1text">
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua."
        Urna nunc id cursus metus aliquam eleifend mi. Massa vitae
        tortor condimentum lacinia quis vel eros.
      </p>
    </div>
    <div class="book1price">
      <p>$15.99</p>
    </div>
    <button class="addtocart">ADD TO CART</button>
  </div>
</div>
</div>`
var aboutContent = ``

function setCurrentPageContent(pageID) {
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
}

function getLastName(lastName){
    console.log();
}

export { setCurrentPageContent };