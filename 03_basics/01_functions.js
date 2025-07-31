

function name(){

console.log("p");
console.log("a");
console.log("l");
console.log("a");
console.log("k");


}

// name()


// function addnumbers(a,b){
//     console.log(a + b);
// }


function addnumbers(a,b){
    // let result = a+b
    // return result;

    return a + b

}

const result = addnumbers(9,7);

// console.log(result);


function loginUser(username = "palak"){
    if(!username){
      console.log("Please enter a username");
      return;
    }

    return `${username} just logged in`
}

// console.log
// (loginUser("paak"))

console.log(loginUser("palak"));