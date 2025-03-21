function saveData() {
    let input = document.getElementById("userInput").value;
    if (input.trim() !== "") {
        localStorage.setItem("storedData", input);
        displayData();
    }
}

// Display saved data from local storage
//function displayData() {
//    let savedData = localStorage.getItem("storedData");
//    if (savedData) {
//        document.getElementById("savedData").textContent = "Saved Data: " + savedData;
//    }
//}

// Load saved data on page load
//window.onload = displayData;