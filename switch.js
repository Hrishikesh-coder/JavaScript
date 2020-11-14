var user = "testprep";

switch (user) {
    case "admin":
        console.log("full access");
        break;
    case "testprep":
        console.log("give tests");
        break;
    case "user":
        console.log("consume content");
        break;

    default:
        console.log("No one");
        break;
}