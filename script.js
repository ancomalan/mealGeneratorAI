const input = document.getElementById("task"); //get input element and store in a variable
const list = document.getElementById("list"); //get list element from html

//function adds task with option for deletings
function addTask() {
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
