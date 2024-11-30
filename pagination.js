let link = document.getElementsByClassName("link");

let currentValue = 1;
 
function activeLink(){
    for(i of link){
        i.classList.remove("active");
    }
   event.target.classList.add("active");
   currentValue = event.target.Value;

}

function backBtn(){
    if(currentValue > 1){
        for(i of link){
            i.classList.remove("active");
       }
       currentValue--;
       link[currentValue -1].classList.add("active");
    }
}

function nextBtn(){
    if(currentValue < 7){
        for(i of link){
            i.classList.remove("active");
       }
       currentValue++;
       link[currentValue -1].classList.add("active");
    }
}