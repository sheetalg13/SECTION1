let userdetail={
    name:'Raju',
    email:'raju@gmail',
    age:35,
    password:'3336876',
    'phone-no':'3454356277',
}
console.log(userdetail.email);
console.log(userdetail['age']);
console.log(userdetail['phone-no']);
userdetail.address='lucknow';
console.log(userdetail);


let[brand,model,price,colour]=['samsung','s45',78787,'black'];
console.log(model);



let smartphone={
    brand,
    model,
    price,
    colour
}
console.log(smartphone);
smartphone.model='S23 pro';
console.log(smartphone);
smartphone.colour=['red','blue','black'];
console.log(smartphone);
console.log(smartphone.colour[1]);
// console.log(smartphone.colour[]);
smartphone.colour.push('yellow');
console.log(smartphone);
