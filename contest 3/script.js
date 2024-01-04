let input = document.querySelector("input");
let row = document.querySelector(".added-data");
var a;
var i=0;
let savelist = [];
function save(){
    event.preventDefault();

   savelist.push(input.value);

if(savelist !== null){
 
        a = document.createElement("div");
       a.className = "row";
       a.innerText = savelist[i++];
       a.style.display = "block";
       row.appendChild(a);
    
   
}
}