let nums=[31,654,350,386,573,76];
for(i=0;i<=nums[i];i++)
{
    if(nums[i]%2!=0)
    {
        // console.log(nums[i]);
    }
}
let oddnums=[];
for(n of nums)
{
    if(n%2!=0)
    {
        // console.log(n);
        oddnums.push(n);
       
    }
}
// console.log('odd nums are=',oddnums);
 oddnums=nums.filter((n)=>{return n%2!=0});
// console.log(oddnums);
let price=['₹500/-','₹67500/-','₹5889/-','₹444/-','₹99900/-'];

let numprice=price.map((p)=>{return p.slice(1,-2)});
console.log(numprice);