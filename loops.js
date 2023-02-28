//for(let i=0;i<10;i++)
//{
    
  //  console.log(i);
//}




for(let i=50;i<=80;i++)
{
    if(i%7==0)
    {
        console.log(i);
    }
}
myname="SHEETAL";
for(let c of myname)
{
    console.log(c);
}
console.log('------------------');
mystr="all is well";
for(c of mystr)
{
    if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
    {
        console.log(c);
    }
}
console.log("-----------------------");
for(c of 'aeiou'){
if(mystr.includes(c)){
    console.log(c);
}
}
console.log("-----------------------");
for(c of mystr){
if('aeiou'.includes(c)){
    console.log(c);
}
}

