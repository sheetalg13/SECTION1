let nums=[31,654,350,386,573,76,23];
for(let i=0;i<nums.length;i++)
{ 
    if(nums[i]%2!=0)
    {

    // console.log(nums[i]);
     } 
}
let newarr=[];

for(let n of nums)
{
    if(n%2!=0)
    {
    // console.log(n);
    newarr.push(n)

    }
} 
console.log(newarr);

let res =nums.filter((n)=>{ return n%2!=0});
// console.log(res);
let prices=['₹384/-','₹98354/-','₹8654/-','₹38664/-'];
let numprice =prices.map((p)=>{return parseInt(p.slice(1,-2))});
console.log(numprice);
