const words = ['spray' ,'elite', 'exuberant', 'destruction', 'present'];

//if the callback function returns a truthy value it will stay in the array. It will not be present if not
const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected ouput : Array ['exuberant', 'destruction', 'present']

// now if i wanted to retrieve the values in the array what would i do?
result.forEach((element) => {
    console.log(element);
});

