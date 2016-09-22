$(document).ready(function(){
  $('.parallax').parallax();
});

var typedArray = [
    "likes to code.^200",
    "loves to teach.^200",
    "likes to explore.^200",
    "is passionate about coding &amp; education.^200",
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