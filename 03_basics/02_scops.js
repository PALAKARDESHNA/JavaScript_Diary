// let a = 30

// if(true) {
    
// let a = 10
// const b = 20

// console.log("undervala a:" , a); // 10
// }



// console.log("bharvala a:" , a); // ReferenceError: a is not defined
// // console.log(b); // ReferenceError: b is not defined
// // console.log(c); // 70





// nested scopes


function one(){
    const username = "palak"

    function two(){
        const website = "heppu"
        // console.log(username); // palak
    }

    two()

}

one()


if(true){

    const username = "palak"

    if(true){
        const username = "palak"
        if(username === "palak"){
            const website = "papli"
            // console.log(username +" " + website);
        }

    }
    
            // console.log(website);

        }

        // console.log(username);
// +++++++++++++++++++++++++++++++++++++++intresting+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(raju(5))

function raju(value){
    return value+1
}

chutki(5)

const chutki = function(value){
    return value+2
}


 
 


