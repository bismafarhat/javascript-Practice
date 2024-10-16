// let parent=document.querySelector('.parent');
// console.log(parent);

// console.log(parent.children);
// console.log(parent.children[2]);
// console.log(parent.children[2].innerHTML);

// for(let i=0; i<parent.children.length;i++){
//     console.log(parent.children[i].innerHTML);
// }

//  let day=document.querySelector('.day');
//  console.log(day);
//  console.log(day.parentElement);

//  console.log("Nodes",parent.childNodes);

//  console.log("Node",parent.lastElementChild);
// 
//  console.log("Nodes",parent.firstElementChild);

// console.log("Nodes",day.nextElementSibling.innerHTML);


// console.log("Nodes",day.nextSibling);
// function getlanguages(lang){
//     let gs=document.querySelector(".languages");
//     // console.log(lang);

//     let li=document.createElement("li");
//     li.innerHTML=`${lang}`;

//     gs.appendChild(li);
// }
// getlanguages("python");
// getlanguages("typescript");

function getlanguages(){
    let gs=document.querySelector(".languages");
    // console.log(lang);

    let li=document.createElement("li");
    let ad=document.createTextNode("typescipt");

    li.appendChild(ad)
    gs.appendChild(li)
}
getlanguages();
getlanguages("python");
getlanguages("typescript");


 
