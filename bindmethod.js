const hrishi = {
    name : "Hrishikesh",
    surname : "bhanja",
    role : "noone",
    course : 3,
    info : function(){
        console.log(`
            Name : ${this.name}
            Surname : ${this.surname}
        `);
    }
};

const hrishi2 = {
    name : "Hrishi",
    surname : "bhanja",
    role : "noone",
    course : 3,
};

hrishi.info.bind(hrishi2)(); //hrishi.info.call(dj)