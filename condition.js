num=30
if(num%2==0)
{
    console.log('number is even');
    console.log('secon line');
    msg='this should be globle';
    var x='function scope';
    let y='block scop';
    const pi=3.14;
    // pi=3.15;
}
else
{
    console.log('number is odd');
}
console.log(msg);
console.log(x);
// console.log(y);
// console.log(pi);
let marks=289;
if(marks>90){
console.log('grade A');
}else if(marks>70){
    console.log('grade B');
}
else if(marks>50){
    console.log('grade c');

}else if(marks<30){
    console.log('fail');
}else{
    console.log('invalid marks');
}



if(marks>90 && marks<=100){
    console.log('grade A');
    }else if(marks>70 && marks<=90){
        console.log('grade B');
    }
    else if(marks>50  && marks<=70){
        console.log('grade c');
    
    }else if(marks<30 && marks<=0){
        console.log('fail');
    }else{
        console.log('invalid marks');
    }