// let arr=[1,23,12,2,3,4,10,54,34,45];


// let abc =arr.map(function(e){
// return e+3;
// });
// console.log(abc);
// console.log(arr);


// let arr=[1,23,12,2,3,4,10,54,34,45];
// let filtermethod=arr.filter(function(e){
//     return e <10;
// });
// console.log(filtermethod);

// let arr=[1,23,12,2,3,4,10,54,34,45];

// let reducemethod=arr.reduce(function(n1,n2){
// return n1+n2;
// });
// console.log(reducemethod);
// console.log(arr);

// let date=new Date();
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// let num=Math.random()*100;
// let num2=Math.round(num);
// console.log(num2);
// console.log(Math.PI);
// console.log(Math.sqrt(4));

// let car={
//     name:"audi",
//     color:"black",
//     price:"1000rs",
//     model:2025,
// };
// console.log(
//     `car name is ${car.name}  car color is ${car.color}
// car price is ${car.price} car model is ${car.model}`
// )

let info={
     name:"ali",
     age:25,
     address:{
        province:{
            value:"punjab",
        dist:{
            value:"rwp",
        city:{
            value:"saddar",
        },
        },
        },
     },
     course:{
        webdev:{
            value:"frontend",
        },
     },
     contact:1234566, 
};
console.log(`name is ${info.name}
age is ${info.age} address is ${info.address.province.value} ${info.address.province.dist.value}
${info.address.province.dist.city.value} ${info.course.webdev.value} ${info.contact}`);

