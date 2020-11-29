var user = function(firstname,lastname){

    this.firstname = firstname;
    this.lastname = lastname;
    this.getName = function(){
        console.log(`Name is : ${this.firstname}`);
    };
};

user.prototype.getLastName = function(){
    console.log(this.lastname);
}

var hrishikesh = new user("hrishikesh","bhanja");

// console.log(hrishikesh);

var sam = new user("sam","nothing");

// console.log(sam);

// hrishikesh.getName();
// sam.getName();

if(hrishikesh.hasOwnProperty("lastname")){
    hrishikesh.getLastName();
}