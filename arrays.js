const movies = ["Dhole","tare jami par", "kgf"," Don2","abc","xyz","pqr"];
movies.pop()    //remove element from the end of array
movies.shift()//remove elements from the start
console.log(movies)
//indexing
// console.log(movies[3]);
// console.log(movies.length)

//removes any no of elements from array
movies.slice(3,2);
console.log(movies);
//removing specific element
movies.slice(movies.indexOf("kgf"),1);
// console.log(movies);
