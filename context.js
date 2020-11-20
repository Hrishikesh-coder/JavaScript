// namaste()

// function namaste(){

//     console.log("Hello In India");

// }

// Context => Global Context ... (like window in browser)
tipper("10");
function tipper(a){

    var bill = parseInt(a);
    console.log(bill+5);

}

//bigtipper("200");

var bigtipper= function (a){

    var bill = parseInt(a);
    console.log(bill+15);

}

//functions are made scanned and available ; variables are not scanned made undefined
console.log(name);

var name = "hb";

