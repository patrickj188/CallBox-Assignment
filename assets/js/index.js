let dropDownFunction = () => {
   const dropDown = document.getElementById("navBar");
    if (dropDown.className === "dropDownNav") {
        dropDown.className += " responsive";
    } else {
        dropDown.className = "dropDownNav";
    }
}