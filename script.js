let buttonBtn = document.querySelector("button");
let anchorBtn = document.querySelector(".needyAnchorTag");
let paragraphBtn = document.querySelector(".needyParagraphTag");
let myImage = document.querySelector("img"); //no quotations| Not string

// This hides the img tag
myImage.style.display = 'none';

// When the button is clicked, the img tag will be displayed and 
// the src (i.e., image to be displayed) will be updated.
buttonBtn.addEventListener("click", function() {
    myImage.style.display = 'block';
    myImage.src = "griddy.gif"; //missing source and skraftz griddy (ok maybe not that second one)
});

// When the mouse is over the anchor tag, the img tag will be displayed and 
// the src (i.e., image to be displayed) will be updated.
anchorBtn.addEventListener("mouseover", function() {
    myImage.style.display = 'block'; //missing style thing
    myImage.src = "https://cdn.pixabay.com/photo/2023/12/13/06/40/cat-8446390_1280.jpg";
});

// When the mouse is over the paragraph tag and then leaves, the img tag will be displayed and 
// the src (i.e., image to be displayed) will be updated.
paragraphBtn.addEventListener("mouseout", function() { // No fuction at the juntion
    myImage.style.display = 'block';
    myImage.src = "https://cdn.pixabay.com/photo/2014/05/07/06/44/cat-339400_1280.jpg";
});