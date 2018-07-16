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

    listItem.appendChild(chkbx);
    listItem.appendChild(label);
    listItem.appendChild(txtinp);
    listItem.appendChild(delebtn);
    listItem.appendChild(editbtn);
}
var addTask=function(){
    console.log("adding task inside incomplete list..")
    var listItem=createTaskStructure(newTask.value);
    incompletelist.appendChild(listItem);
    bindTaskEvents(listItem,completeTask);
}
var editTask=function(){

    var itemList=this.parentNode;
    var editInput=itemList.querySelector('input[type="text"]')
    var label=itemList.querySelector("label");
    var contclassedit=itemList.classList.contains("edit");       //classList returns class names 
    if(contclassedit)
    {
        label.innerText=editInput.value;

    }
    else{
        editInput.value=label.innerText;

    }

}
var deleteTask=function()
{
    var itemList=this.parentNode;
    var ul=itemList.parentNode;
    ul.removeChild(itemList);
}