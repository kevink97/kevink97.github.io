$(document).ready(function(){
  $('.parallax').parallax();
});

var typedArray = [
    "is an explorer.^200",
    "loves to code.^200",
    "loves to teach.^200",
    "Kang"
];

$(function(){
    $(".element").typed({
        strings: typedArray,
        startDelay: 700,
        typeSpeed: 5,
        backSpeed: 0
    });
});