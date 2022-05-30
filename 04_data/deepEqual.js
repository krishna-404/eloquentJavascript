// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

const deepEqual = (firstObj, secondObj) => {
    firstKeys = Object.keys(firstObj);
    secondKeys = Object.keys(secondObj);

    if (firstKeys.length === secondKeys.length) {
        for (let key of firstKeys) {
            // console.log(typeof(firstObj[key]), typeof(secondObj[key]));
            //Check if the values are true when not an object
            if (typeof(firstObj[key]) !== "object" && typeof(secondObj[key]) !== "object") {
                if (firstObj[key] !== secondObj[key]) {
                    return false;
                }
            }
            //Check if the values are null because typeof(null) === "Object"
            else if (firstObj[key] === null || secondObj[key] === null) {
                if (secondObj[key] !== firstObj[key]) {
                    return false
                } 
            }
            //Check if the values are array because typeof(Array) = "Object"
            else if (firstObj[key].isArray) {

            }
            //Recursive function for deep checking the object
            else {
                if(!deepEqual(firstObj[key], secondObj[key])) {
                    return false;
                }
            }
        }
    } else {
        return false;
    }
    return true;
}