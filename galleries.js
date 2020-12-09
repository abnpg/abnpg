//------------------CHANGEIMAGE------------//

var mysrc = "00.png";

/* FOTI */
function changeImage00() {
   if (mysrc == "00.png") {
       document.images["gallery-contain14"].src = "projects/14-FOTI/01.png";
       mysrc = "01.png";

 } else if (mysrc == "01.png"){
       document.images["gallery-contain14"].src = "projects/14-FOTI/02.png";
       mysrc = "02.png";

 } else if (mysrc == "02.png"){
       document.images["gallery-contain14"].src = "projects/14-FOTI/00.png";
       mysrc = "00.png";
 } 
}

/* CUIDAR */
function changeImage03() {
      if (mysrc == "00.png") {
          document.images["gallery-cover"].src = "projects/13-cuidar/galeria/01.jpg";
          mysrc = "01.png";
   
    } else if (mysrc == "01.png"){
          document.images["gallery-cover"].src = "projects/13-cuidar/galeria/02.jpg";
          mysrc = "02.png";
   
    } else if (mysrc == "02.png"){
          document.images["gallery-cover"].src = "projects/13-cuidar/galeria/00.jpg";
          mysrc = "00.png";
    } 
   }
