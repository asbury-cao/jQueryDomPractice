"use strict";

let $pupImage = $("article img");
$pupImage.addClass("image-center");

let $articleLastChild = $("article p:last-child");
$articleLastChild.remove();


let $title = $("#title");
$title.css("font-size", getRandomArbitrary(0, 100));

function getRandomArbitrary(max, min) {
  return Math.random() * (max - min) + min;
}

let $list = $(".col-sm-4 ol");
$list.append("<li>Jquery is neat!</li>");

let $aside = $("aside");
//remove all the stuff and replace with:
$aside.html(`<p>We're sorry for the previous list content.
It's understandable, puppies are cute.</p>`);

let $colorSelectors = $(".form-control");

//there is no distinction other than its innertext

$colorSelectors.on("change", function () {
  // let red = Number($colorSelectors[0].value).toString(16);
  // let green = Number($colorSelectors[2].value).toString(16);
  // let blue = Number($colorSelectors[1].value).toString(16);
  //set background color of body to the combination of RBG
  //did we want to use container or body for the selector?
  // $("body").css("background-color", `#${red}${green}${blue})`)
  $("body").css("background-color",
    `rgb(${$colorSelectors[0].value},
         ${$colorSelectors[2].value},
         ${$colorSelectors[1].value})`);
});


$pupImage.on('click', function () {
  $pupImage.remove();
});