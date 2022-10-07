// This is my model and it handles on the service calls

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

var bookList3 = [
  {
    image: "misery.jpg",
    price: "19.99",
  },

  {
    image: "frankenstein.jpg",
    price: "15.99",
  },

  {
    image: "phantoms.jpg",
    price: "19.99",
  },
];

var bookList4 = [
  {
    image: "winnie-the-pooh.jpg",
    price: "19.99",
  },

  {
    image: "cat-and-the-hat.jpg",
    price: "15.99",
  },

  {
    image: "fun-facts-about-space.jpg",
    price: "7.99",
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

      // book list 3
      $.each(bookList3, function (idx, book) {
        $(".book-row3").append(`<div class="book-row--book">
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

      // book list 4
      $.each(bookList4, function (idx, book) {
        $(".book-row4").append(`<div class="book-row--book">
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
