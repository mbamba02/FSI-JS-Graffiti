
// Select some elements...
let header = document.querySelector('#page-header'); //# to select id
header.style.textAlign = "left";

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}

