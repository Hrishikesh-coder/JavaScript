var user = {
    name : "",
    getName : function () {
        console.log(`Name : ${this.name}`);       
},
};

var hitesh = Object.create(user);

console.log(hitesh);