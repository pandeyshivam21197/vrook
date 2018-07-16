var newTask=document.getElementById("new-task");
var addbutton=document.getElementsByTagName("button")[0];
var incompletelist=document.getElementById("incomplete-tasks");
var completelist=document.getElementById("completed-taks");
//createTaskStructure,addtask,editTask
addButton.addEventListener("click",addTask);

var createTaskStructure=function(labelName){
    console.log("structure created..")
    var listItem=document.createElement("li");
    var chkbx=document.createElement("input");
    var label=document.createElement("label");
    var txtinp=document.createElement("input");
    var delebtn=document.createElement("button");
    var editbtn=document.createElement("button");
    chkbx.type="checkbox";
    txtinp.type="text";
    label.innerText=labelName;
    delebtn.innerText="delete";
    editbtn.innerText="edit";
    delebtn.className="delete";
    editbtn.className="edit";







}