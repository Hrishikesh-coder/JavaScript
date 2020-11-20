var userRole = (name,role) => {

    switch (role) {
        case "admin":
            return `${name} is an admin`;
            break; //this is not needed
        
        case "user":
            return `${name} is a user`;

        default:
            break;
    }

};

console.log(userRole("Hrishikesh","admin"));