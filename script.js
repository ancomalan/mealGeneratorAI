const input = document.getElementById("task")//get input element and store in a variable 
const list = document.getElementById("list")//get list element from html

//function adds task to list 
function addTask(){
   const li = document.createElement("li"); //create a new list item element 
   li.append(input.value); //append input text to list item element 
   document.getElementById("list").append(li)//append li to list 
   input.value = "" ; //clear input box after clicking add button
}



