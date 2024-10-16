let bt=document.getElementById("btn");
bt.addEventListener("click",function todolist(){
 let ad=document.querySelector(".todolist");

 let input=document.getElementById("writetext");
 let inputfield=input.value;

 let li=document.createElement("li");
 li.style.width="500px";
 li.style.height="40px";
 li.style.borderRadius="12px";
 li.style.backgroundColor="white";
 li.style.listStyle="circle";

 let d=document.createTextNode(inputfield);
li.appendChild(d)
ad.appendChild(li)

});
todolist();

let edit=document.createElement("i");

li.appendChild(edit)

