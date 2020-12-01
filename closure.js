// function init(){
//     var name = "hrishikesh";
//     console.log("hello");
//     function sayName(){
    
//         console.log(name);
    
//     }

//     return sayName;
// }

// var n = init();

// //console.log(n);

// n();

function add(x){

    return function(y){
        return x + y;
    }


}

var ad1 = add(4);

console.log(ad1(5));

console.log(add(10)(32)); //curring


