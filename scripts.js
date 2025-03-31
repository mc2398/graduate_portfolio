// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
//   function yassify() {
//   document.getElementByClass("libguide-head-background").style.color =
//   "#F51387";
// }
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// function makeBoring() {
//     document.getElementsByClass("accordion").style.color = "black";
// }
//   const element = document.getElementById("accordion");
  
//   element.addEventListener("click", function() {
//   // Generate a random color
//   const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
 

//   // Change the background color of the element
//   element.style.backgroundColor = randomColor;
//   });

// // var acc = document.getElementsByClassName("accordion");
// // var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }