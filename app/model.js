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
    bookTitle: "Twilight Box Set",
    image: "twilight-box-set.jpg",
    price: "99.99",
    idx: 0,
  },

  {
    bookTitle: "Harry Potter Box Set",
    image: "hp-box-set.jpg",
    price: "100",
    idx: 1,
  },

  {
    bookTitle: "Game of Thrones Box Set",
    image: "got-box-set.jpg",
    price: "100",
    idx: 2,
  },
];

var bookList2 = [
  {
    bookTitle: "Finding Me",
    image: "finding-me.jpg",
    price: "27.99",
    idx: 3,
  },

  {
    bookTitle: "Martin Luther King Jr. Biography",
    image: "mlk-biography.jpg",
    price: "19.99",
    idx: 4,
  },

  {
    bookTitle: "Elenor Roosevelt Biography",
    image: "elenor-roosevelt-biography.jpg",
    price: "17.99",
    idx: 5,
  },
];

var bookList3 = [
  {
    bookTitle: "Misery",
    image: "misery.jpg",
    price: "19.99",
    idx: 6,
  },

  {
    bookTitle: "Frankenstein",
    image: "frankenstein.jpg",
    price: "15.99",
    idx: 7,
  },

  {
    bookTitle: "Phantoms",
    image: "phantoms.jpg",
    price: "19.99",
    idx: 8,
  },
];

var bookList4 = [
  {
    bookTitle: "Winnie the Pooh",
    image: "winnie-the-pooh.jpg",
    price: "19.99",
    idx: 9,
  },

  {
    bookTitle: "Cat in the Hat",
    image: "cat-and-the-hat.jpg",
    price: "15.99",
    idx: 10,
  },

  {
    bookTitle: "Fun Facts About Space",
    image: "fun-facts-about-space.jpg",
    price: "7.99",
    idx: 11,
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
  
          <button id="${idx}">Add to cart</button>
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
  
          <button id="${idx}">Add to cart</button>
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
  
          <button id="${idx}">Add to cart</button>
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

        <button id="${idx}">Add to cart</button>
      </div>
    </div>`);
      });
      callback();
    });
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log(data);
      $("#app").html(data);
      $.each(cart, function (idx, cartItem) {
        console.log(bookList[cartItem]);

        let book = bookList[cartItem];

        $(".items").append(`<div class="book-row--book">
        <div class="image">
          <img src="images/${book.image}" alt="" />
        </div>
        <div class="desc">
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et
          malesuada fames ac.</p>
          <p><b>$${book.price}</b></p>
  
          <button id="${idx}">Add to cart</button>
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
}


{/* <div class="book">
        <div class="book-img">
          <img src="assets/${book.bookImg}" alt="" />
        </div>
        <div class="desc">
          <h4>${book.bookTitle}</h4>
          <p>Author: ${book.bookAuthor}</p>
          <p>Price: $${book.price}</p>
  
          <button id="${idx}">Buy</button>
        </div>
      </div> */}