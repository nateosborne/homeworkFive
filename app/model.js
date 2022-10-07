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
var aboutContent = `<div class="aboutpage">
<div class="aboutcont">
  <div class="about1">
    <div class="about1img"></div>
    <div class="about1text">
      <p class="about1textheader">ABOUT THE BOOKNOOK</p>
      <p class="founded">FOUNDED IN 2008</p>
      <p class="about1lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Facilisi nullam vehicula ipsum a arcu cursus vitae congue
        mauris. Turpis nunc eget lorem dolor. Sed viverra tellus in hac
        habitasse. Id aliquet risus feugiat in ante metus. Orci nulla
        pellentesque dignissim enim sit amet. Maecenas pharetra
        convallis posuere morbi leo urna molestie at elementum. Tortor
        at risus viverra adipiscing at in. Odio ut enim blandit volutpat
        maecenas volutpat blandit aliquam etiam. Justo donec enim diam
        vulputate ut. Aliquam ut porttitor leo a diam. Sed id semper
        risus in hendrerit gravida rutrum quisque non. Pellentesque
        habitant morbi tristique senectus et netus et malesuada. In
        ornare quam viverra orci. Condimentum id venenatis a condimentum
        vitae sapien pellentesque habitant morbi. Sed vulputate mi sit
        amet mauris commodo quis imperdiet.
      </p>
    </div>
  </div>

  <div class="about1">
    <div class="about2img"></div>
    <div class="about1text">
      <p class="about1textheader">FIND THE PERFECT BOOK</p>
      <p class="about1lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Facilisi nullam vehicula ipsum a arcu cursus vitae congue
        mauris. Turpis nunc eget lorem dolor. Sed viverra tellus in hac
        habitasse. Id aliquet risus feugiat in ante metus. Orci nulla
        pellentesque dignissim enim sit amet. Maecenas pharetra
        convallis posuere morbi leo urna molestie at elementum. Tortor
        at risus viverra adipiscing at in. Odio ut enim blandit volutpat
        maecenas volutpat blandit aliquam etiam. Justo donec enim diam
        vulputate ut. Aliquam ut porttitor leo a diam. Sed id semper
        risus in hendrerit gravida rutrum quisque non. Pellentesque
        habitant morbi tristique senectus et netus et malesuada. In
        ornare quam viverra orci. Condimentum id venenatis a condimentum
        vitae sapien pellentesque habitant morbi. Sed vulputate mi sit
        amet mauris commodo quis imperdiet.
      </p>
    </div>
  </div>
</div>
</div>`

function setCurrentPageContent(pageID) {
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
}

function getLastName(lastName){
    console.log();
}

export { setCurrentPageContent };