const user = {
    username : "palak",
    price: 999,

    welcomeMessage: function(){
        // console.log(`Welcome ${this.username}`);

        
    }
}

// user.welcomeMessage()

// user.username = "palak ardeshna"
// user.welcomeMessage()

// console.log(this);





// function doodh(){

//     let username = "palak"
//     console.log(this.username);
// }
 
// doodh()




const doodh = () => { 
    let username = "palak"
    console.log(this);
}

// doodh()

const addition = (a, b) =>  a + b

console.log(addition(5, 10));




