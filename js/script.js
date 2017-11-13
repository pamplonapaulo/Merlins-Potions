
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);



function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");      
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}












//
//function loadJSON(path, success, error)
//{
//    var xhr = new XMLHttpRequest();
//    xhr.onreadystatechange = function()
//    {
//        if (xhr.readyState === XMLHttpRequest.DONE) {
//            if (xhr.status === 200) {
//                if (success)
//                    success(JSON.parse(xhr.responseText));
//            } else {
//                if (error)
//                    error(xhr);
//            }
//        }
//    };
//    xhr.open("GET", path, true);
//    xhr.send();
//}
//
//loadJSON('potions.json',
//         function(data) { console.log(data); },
//         function(xhr) { console.error(xhr); },
//         
//         var jsonStr = JSON.stringify(potions);
//
//            document.body.innerHTML = jsonStr;
//
//);
//
//var obj = { "name":"John", "age":30, "city":"New York"};
//var myJSON = JSON.stringify(obj);
//document.getElementById("demo").innerHTML = myJSON;








//
//function openModal() {
//  document.getElementById('myModal').style.display = "block";
//}
//
//function closeModal() {
//  document.getElementById('myModal').style.display = "none";
//}
//
//var slideIndex = 1;
//showSlides(slideIndex);
//
////function plusSlides(n) {
////  showSlides(slideIndex += n);
////}
//
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("demo");
//  var captionText = document.getElementById("caption");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
//  captionText.innerHTML = dots[slideIndex-1].alt;
//}
////
////document.getElementById("demo").innerHTML = person["firstName"];
////
