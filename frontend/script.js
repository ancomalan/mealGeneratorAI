const input = document.getElementById("task"); //get input element and store in a variable
const list = document.getElementById("list"); //get list element from html
const AIResponseDiv = document.getElementById("AIResponse");
let ingredients = []; //array storing ingredients

//function that collects ingredients and adds them to ingredients array
function addIngredient() {
  if (input.value == "") {
    alert("Please enter an ingredient!");
  } else {
    const li = document.createElement("li"); //create a new list item element
    const deleteButton = document.createElement("button"); //create a new delete button for each task added
    deleteButton.innerHTML = "X"; // add text to delete button
    li.append(input.value); //append input text to list item element
    li.append(deleteButton); //append delete button to li element
    list.append(li); //append li to list
    input.value = ""; //clear input box after clicking add button
    deleteButton.addEventListener("click", function () {
      li.remove();
    }); //add event listener for delete button
  }
}

function generateMeal() {
  if (list.childElementCount == 0) {
    alert("No ingredients listed!");
  } else {
    ingredients = []; //reset ingredients array everytime the user clicks generate
    //go through all list items in unordered list and add them to ingredients array
    const listItems = list.getElementsByTagName("li"); //get html collection of li elements
    for (let i = 0; i < listItems.length; i++) {
      ingredients.push(listItems[i].innerText.slice(0, -1)); //get ingredient name and add to ingredients array
    }

    //create javascript object that contains all ingredients
    const data = {
      ingredients: ingredients,
    };
    const jsonData = JSON.stringify(data); //convert data to json so we can send POST request

    //send post request to flask server with ingredient list
    fetch("http://127.0.0.1:5000/generate-meal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      //get json response object, convert it to javascript, then get actual data sent back from server
      .then((res) => res.json())
      .then((data) => displayResponse(data["jsonResponse"]))
      .catch((error) => console.log(error));
  }
}

function displayResponse(data) {
  AIResponseDiv.innerText = data;
}
