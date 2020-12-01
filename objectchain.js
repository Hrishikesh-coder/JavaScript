var user = {
    name : "",
    getName : function () {
        console.log(`Name : ${this.name}`);       
},
};

var hitesh = Object.create(user);

console.log(hitesh);

hitesh.name = "Hrishikesh";
hitesh.getName();

var hrishi = Object.create(user, {
    name : {value : "hrishi"},
});

hrishi.getName();