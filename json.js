let obj1={name:"Person 1",age:5};
let keys1=Object.keys(obj1).sort();
console.log(keys1);
let obj2={age:5,name:"Person 1",};
let keys2=Object.keys(obj2).sort();
console.log(keys2);
if(JSON.stringify(keys1)===JSON.stringify(keys1)){
    console.log("equal");
}
else{
    console.log("not equal");   
}
