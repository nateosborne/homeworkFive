// import * as MODEL from "./model.js";

// function initListeners() {
//   $("nav a").click((e) => {
//     e.preventDefault();
//     let btnID = e.currentTarget.id;

//     MODEL.setCurrentPageContent(btnID);
//   });
// }

// $(document).ready(function () {
//   // MODEL.setCurrentPageContent("home");
//   initListeners();
// });

import * as MODEL from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageIDarray = pageID.split("/");
  pageID = pageIDarray[0];
  let subPageID = pageIDarray[1];

  console.log("hash " + pageID);
  //   MODEL.changePage(pageID);

  if (pageID == "") {
    MODEL.changePage("home");
  } else {
    if (pageID == subPageID) {
      MODEL.changePage(pageID);
    } else {
      MODEL.changePage(pageID, subPageID);
    }
  }
}

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   console.log(hashTag + ' ' + pageID);
  if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID, initSubmitListener);
  } else if (pageID == "books") {
    MODEL.changePage(pageID, buyNow);
  } else {
    MODEL.changePage(pageID);
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function buyNow() {
  $(".desc button").on("click", function (e) {
    let bookID = e.currentTarget.id;
    console.log(bookID);
    MODEL.addToCart(bookID);
  });
}

function initSubmitListener() {
  $("#submit").on("click", function (e) {
    // console.log("submit").val();
    let fn = $("#fname").val();
    let ln = $("#lname").val();
    let em = $("#email").val();
    let pw = $("#pw").val();
    if (fname === "") {
      alert("enter your first name");
    } else if (lname == "") {
      alert("enter your last name");
    } else if (email == "") {
      alert("enter your email");
    } else if (pw == "") {
      alert("enter an email");
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: em,
      };

      MODEL.setUserInfo(userObj);
    }
  });
}

$(document).ready(function () {
  initURLListener();
});
