const items = document.querySelectorAll('.item img');
const buttons = document.querySelectorAll('.button');


buttons.forEach(button => button.addEventListener(('click'),nextImage));

function nextImage(){
 
const imageElements = Array.from(document.querySelectorAll('.item img'));
const currentSRC = imageElements.map(item => item.src);
          
 if (this.className.includes('right')){
    const firstImage = currentSRC.shift();
    currentSRC.push(firstImage);
    }else{
      const lastItem = currentSRC.pop();
      currentSRC.unshift(lastItem);}
          

  imageElements.forEach(function(image,imgIndex){
    image.src = currentSRC[imgIndex];});
}

