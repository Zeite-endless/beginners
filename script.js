var sneaker = document.getElementById('sneaker');

function imagefunToRight() {
    if (sneaker.src.match("sneakertoLeft.jpg")) {
        sneaker.src = "sneakerdown.jpg";
        
    }
    else if(sneaker.src.match("sneakerdown.jpg")){
        sneaker.src = "sneakertoRight.jpg";
        
    }
    else if(sneaker.src.match("sneakertoRight.jpg")){
        sneaker.src = "sneakerup.jpg";
        
    }
    else if(sneaker.src.match("sneakerup.jpg")){
        sneaker.src = "sneakerangle.jpg";
        
    }
    else if(sneaker.src.match("sneakerangle.jpg")){
        sneaker.src = "sneakerback.jpg"
    }
    else if (sneaker.src.match("sneakerback.jpg")){
        sneaker.src = "sneakertoLeft.jpg"
    }
}  

function imagefunToLeft() {
    if (sneaker.src.match("sneakerdown.jpg")) {
        sneaker.src = "sneakertoLeft.jpg";
        
    }
    else if(sneaker.src.match("sneakertoRight.jpg")){
        sneaker.src = "sneakerdown.jpg";
        
    }
    else if(sneaker.src.match("sneakerup.jpg")){
        sneaker.src = "sneakertoRight.jpg";
        
    }
    else if(sneaker.src.match("sneakertoLeft.jpg")){
        sneaker.src = "sneakerangle.jpg";
        
    }
    else if (sneaker.src.match("sneakerangle.jpg")){
        sneaker.src = "sneakerback.jpg"
    }
    else if (sneaker.src.match("sneakerback.jpg")){
        sneaker.src = "sneakerup.jpg"
    }
} 

var like = document.getElementById("like")

function likeClick(){
    like.style.color = "red"
    like.style.opacity = "1"
}

