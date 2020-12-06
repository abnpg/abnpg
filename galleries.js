//------------------CHANGEIMAGE------------//

var mysrc = "00.png";

/* FOTI */
function changeImage00() {
   if (mysrc == "00.png") {
       document.images["gallery"].src = "projects/14-FOTI/01.png";
       mysrc = "01.png";

 } else if (mysrc == "01.png"){
       document.images["gallery"].src = "projects/14-FOTI/02.png";
       mysrc = "02.png";

 } else if (mysrc == "02.png"){
       document.images["gallery"].src = "projects/14-FOTI/00.png";
       mysrc = "00.png";
 } 
}