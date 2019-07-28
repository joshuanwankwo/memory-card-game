// making Icons disapear after few seconds

const icons = document.getElementsByName("icon");

function timeOn(){
    Array.from(icons).forEach(function(back){
        back.style.display="none";
    }) 
}

setTimeout(timeOn, 6000)

// shuffling the cards randomly
const pics = document.getElementsByClassName("card");

const shuffle =()=>{

    Array.from(pics).forEach(function(box){
        box.style.order=Math.floor(Math.random()*16);
    })
}
const refreshbtn = document.getElementById("refresh");

refreshbtn.addEventListener("click", shuffle);

// Increamenting the moves when any card is being clicked
    Array.from(pics).forEach(function(moves){
      moves.addEventListener("click",function(e){
        let counts = document.getElementById("count");
       counts.textContent++;
      })  
    })


    Array.from(pics).forEach(icon => icon.addEventListener("click", any))
function any(event){
    event.target.childNodes.forEach(icon => icon.style.display= "block")
     };
