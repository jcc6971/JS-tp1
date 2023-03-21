






const rond1 = document.createElement("span");
document.body.appendChild(rond1);
rond1.classList.add("rond1");
rond1.style.width="15px";
rond1.style.height="15px";

const rond2 = document.createElement("span");
document.body.appendChild(rond2);
rond2.classList.add("rond2");
rond2.style.width="90px";
rond2.style.height="90px";

const rond3= document.createElement("span");
document.body.appendChild(rond3);
rond3.classList.add("rond3");
rond3.style.width="150px";
rond3.style.height="150px";

const mouses =document.querySelectorAll(".rond1, .rond2, .rond3");

window.addEventListener('mousemove',(e) =>{
    mouses.forEach((mouse) => {
        mouse.style.left= e.x + "px";
        mouse.style.top= e.y + "px";
        
    })
}
)


//  window.addEventListener("mousemove",(e) =>{
    //     rond1.style.left=(e.pageX+"px");})
//  window.addEventListener("mousemove",(e) =>{
//     rond1.style.top=(e.pageY+"px"); } )

//  window.addEventListener("mousemove",(e) =>{
//     rond2.style.left=(e.pageX+"px");})
//  window.addEventListener("mousemove",(e) =>{
//     rond2.style.top=(e.pageY+"px"); } )

//  window.addEventListener("mousemove",(e) =>{
//     rond3.style.left=(e.pageX+"px");})
//  window.addEventListener("mousemove",(e) =>{
//     rond3.style.top=(e.pageY+"px"); } )
 



