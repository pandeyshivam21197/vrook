var newTask=document.getElementById("new-task");
var addbutton=document.getElementsByTagName("button")[0];
var incompletelist=document.getElementById("incomplete-tasks");
var completelist=document.getElementById("completed-taks");
//createTaskStructure,addtask,editTask
addbutton.addEventListener("click",addTask);
//creating child(li) structure of UL
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
    listItem.appendChild(editbtn);
    listItem.appendChild(delebtn);
    
    return listItem;
}
var addTask=function(){
    var listItem=createTaskStructure(newTask.value);
    console.log("adding task inside incomplete list..")
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
    if(confirm("are sure ,you want to delete?"))
    {
    var itemList=this.parentNode;
    var ul=itemList.parentNode;
    ul.removeChild(itemList);
    window.alert("deleted!");
    }
    else{
        window.alert("you pressed cancel");
    }
}
//complete and incomplete functions for appending the new task made basis of check box (onchange)

var completeTask=function()
{
    var itemList=this.parentNode;
    incompletelist.appendChild(itemList);
    bindTaskEvents(itemList,incompleteTask);

}
var incompleteTask=function()
{
    var itemList=this.parentNode;
    console.log(itemList);
    completelist.appendChild(itemList);
    bindTaskEvents(itemList,completeTask);
}

var bindTaskEvents=function(itemList,checkboxhandle)
{
    var il=itemList;
    console.log(il);
    var checkb= il.querySelector('input[type="checkbox"]');
    var editbtn=il.querySelector("button.edit");
    var delebtn=il.querySelector("button.delete");

    editbtn.onclick=editTask;
    delebtn.onclick=deleteTask;
    checkb.onchange=checkboxhandle;
}
// console.log(incompletelist.childre);

for (var i=0; i<=incompletelist.children.length ;i++){

    
    bindTaskEvents(incompletelist.children[i],completeTask);
}
// console.log(completelist.children);
for (var i=0; i<=completelist.children.length ;i++){
	
		bindTaskEvents(completelist.children[i],incompleteTask);
	}
