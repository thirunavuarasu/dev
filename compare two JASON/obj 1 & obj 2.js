
const obj1={name:"person1",
age:5};

const obj2={age:5,
    name:"person1"};
    
JSON.stringify(obj1)===JSON.stringify(obj2)
_.isEqual(obj1,obj2)

