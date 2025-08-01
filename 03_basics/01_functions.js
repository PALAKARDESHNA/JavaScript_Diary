

function name(){

// console.log("p");
// console.log("a");
// console.log("l");
// console.log("a");
// console.log("k");


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
    //   console.log("Please enter a username");
      return;
    }

    return `${username} just logged in`
}

// console.log
// (loginUser("paak"))

// console.log(loginUser("palak"));



function calculatecartprice(...num1){
return num1

}

const user = {
    username: "palak",
    price: 999,
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Palak",
    price: 559,
})

const myNewArray = [1,2,3,4,5,6,7,8,9,10]


function returnSecoondValue(getArray){
    return getArray[1]
}


// console.log(calculatecartprice(10,400,500));

