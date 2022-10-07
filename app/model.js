// This is my model and it handles on the service calls
// var homeContent = `<div class="homepage">
// <div class="homehero">
//   <div class="homeherotext">
//     <p class="homeherotexttop">A PLACE IS <br />IS NOT A PLACE</p>
//     <p>UNTIL IT HAS A BOOKSTORE</p>
//   </div>
// </div>
// </div>
// <div class="homepage2">
// <div class="homebookscont">
//   <div class="book1cont">
//     <div class="book1img"></div>
//     <div class="book1text">
//       <p>
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         Urna nunc id cursus metus aliquam eleifend mi. Massa vitae
//         tortor condimentum lacinia quis vel eros.
//       </p>
//     </div>
//     <div class="book1price">
//       <p>$15.99</p>
//     </div>
//     <button class="addtocart">ADD TO CART</button>
//   </div>

//   <div class="book1cont">
//     <div class="book2img"></div>
//     <div class="book1text">
//       <p>
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         Urna nunc id cursus metus aliquam eleifend mi. Massa vitae
//         tortor condimentum lacinia quis vel eros.
//       </p>
//     </div>
//     <div class="book1price">
//       <p>$25.99</p>
//     </div>
//     <button class="addtocart">ADD TO CART</button>
//   </div>

//   <div class="book1cont">
//     <div class="book3img"></div>
//     <div class="book1text">
//       <p>
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         Urna nunc id cursus metus aliquam eleifend mi. Massa vitae
//         tortor condimentum lacinia quis vel eros.
//       </p>
//     </div>
//     <div class="book1price">
//       <p>$15.99</p>
//     </div>
//     <button class="addtocart">ADD TO CART</button>
//   </div>
// </div>
// </div>`;
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
</div>`;

// function setCurrentPageContent(pageID) {
//     let contentName = pageID + "Content";
//     $("#app").html(eval(contentName));
// }

// function getLastName(lastName){
//     console.log();
// }

// export { setCurrentPageContent };

var userInfo = {};
var cart = [];
var bookList = [
  {
    image: "twilight-box-set.jpg",
    price: "99.99",
  },

  {
    image: "hp-box-set.jpg",
    price: "100",
  },

  {
    image: "got-box-set.jpg",
    price: "100",
  },
];

var bookList2 = [
  {
    image: "finding-me.jpg",
    price: "27.99",
  },

  {
    image: "mlk-biography.jpg",
    price: "19.99",
  },

  {
    image: "elenor-roosevelt-biography.jpg",
    price: "17.99",
  },
];

export function changePage(pageID, callback) {
  if (pageID == "" || pageID == "home") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
      callback();
    });
  } else if (pageID == "books") {
    $.get(`pages/${pageID}.html`, function (data) {
      // console.log("data " + data);
      $("#app").html(data);
      $.each(bookList, function (idx, book) {
        $(".book-row").append(`<div class="book-row--book">
        <div class="image">
          <img src="images/${book.image}" alt="" />
        </div>
        <div class="desc">
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et
          malesuada fames ac.</p>
          <p><b>$${book.price}</b></p>
  
          <button id="${idx}">Buy</button>
        </div>
      </div>`);
      });

      // book list 2
      $.each(bookList2, function (idx, book) {
        $(".book-row2").append(`<div class="book-row--book">
        <div class="image">
          <img src="images/${book.image}" alt="" />
        </div>
        <div class="desc">
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et
          malesuada fames ac.</p>
          <p><b>$${book.price}</b></p>
  
          <button id="${idx}">Buy</button>
        </div>
      </div>`);
      });
      callback();
    });
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      $.each(cart, function (idx, cartItem) {
        console.log(bookList[cartItem]);

        let book = bookList[cartItem];

        $("items").append(`<div class="book">
        <div class="book-img">
          <img src="assets/${book.bookImg}" alt="" />
        </div>
        <div class="book-info">
          <h4>${book.bookTitle}</h4>
          <p>Author: ${book.bookAuthor}</p>
          <p>Price: $${book.price}</p>
  
          <button id="${idx}">Buy</button>
        </div>
      </div>`);
      });
    });
  }
}

export function setUserInfo(userObject) {
  userInfo = userObject;
  console.log(userInfo);
}

export function addToCart(bookIdx) {
  cart.push(bookIdx);
  $("#cartCount").html(cart.length.toString());
}
