let $image = $("img");
$image.addClass("image-center");

let $article = $("article p:last-child");
$article.remove();


let $title = $("#title");
$title.css("font-size", getRandomArbitrary(0, 100));

function getRandomArbitrary(max, min) {
  return Math.random() * (max - min) + min;
}
