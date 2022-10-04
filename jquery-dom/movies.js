"use strict";


$("form").on('submit', function (evt) {
  evt.preventDefault();
  let $titleInput = $(".title-input");
  let title = $titleInput.val();

  let $ratingInput = $(".rating-input");
  let rating = $ratingInput.val();

  $('.submissions')
    .append(`<div>${title} ${rating} <button>Remove</button> </div>`);

});


$('.submissions').on('click', "button", function (event) {

  let parent = $(event.target).parent();
  parent.remove();
});