let dropDownFunction = () => {
    const dropDown = document.getElementById("navBar");
    if (dropDown.className === "dropDownNav") {
        dropDown.className += " responsive";
    } else {
        dropDown.className = "dropDownNav";
    }
}




// Bonus Challenge 


let array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"]
let array_two = ["dog", "goose", "kite", "meal", "laptop"];

const matchingValues = array_one.filter(e => array_two.includes(e));

console.log(matchingValues);

let matchedArr = (arrOne, arrTwo) => {
    let match = [];
    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            if (arrOne[i] === arrTwo[j]) {
                match.push(arrOne[i])
            }
        }
    }
    return match
}
console.log(matchedArr(array_one, array_two))