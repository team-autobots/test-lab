"use strict";

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const index = () => {
  return $.ajax({
    url: "https://wdi-library-api.herokuapp.com/books",
    method: "GET"
  });
};

const getBook = () => {
  index()
    .then(res => console.log(res))
    .catch(err => console.warn(err));
};

$(() => {
  $("#get-book").on("click", getBook);
});
