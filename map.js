var myMap = new Map();

myMap.set(0,"nothing")
myMap.set(1,"one")
myMap.set(2,"two")

console.log(myMap);

for(let key of myMap.values()){
    console.log(key);
}

for(let [key,value] of myMap){
    console.log(key+ ' '+ value);
}

myMap.forEach( (value, key) => { console.log(value + " " + key)})

//mymap.delete(2)