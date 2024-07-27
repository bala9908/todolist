let ul=document.getElementById("todoitemcontainer");
let addtask=document.getElementById("addtaskbutton");



let todolist=[
    {
        text:"html",
        value:1
    },
    {
        text:"css",
        value:2
    },
    {
        text:"javascript",
        value:3
    },
];
let count=todolist.length;
function onaddtodo(){
    let inputelement=document.getElementById("todoinput");
    let inputvalue=inputelement.value;
    if(inputvalue==""){
        alert("eneter valid");
        return;
    }
    count=count+1
    let newtodo={
        text:inputvalue,
        value:count
    }
    toadddandremove(newtodo);
    inputelement.value="";
    
}


addtask.onclick=function(){
    onaddtodo()
}





function checkboxchange(checkid,labelid){
    let inputelement=document.getElementById(checkid);
    let labelelement=document.getElementById(labelid);
    if(inputelement.checked===true){
        labelelement.classList.add("line");
    }
    else{
        labelelement.classList.remove("line");
    }

}
function deletetask(todoid){
    let todoelement=document.getElementById(todoid);
    ul.removeChild(todoelement);
}


function toadddandremove(todolist){

    let checkid="checkbox"+todolist.value;
    let labelid="label"+todolist.value;
    let todoid="delete"+todolist.value;


    let li=document.createElement("li");
    ul.appendChild(li);
    li.classList.add("d-flex","flex-row","mt-3");
    li.id=todoid;


    let inputelement=document.createElement("input");
    inputelement.type="checkbox";
    inputelement.id=checkid;
    li.appendChild(inputelement);
    inputelement.classList.add("checkbox");

    inputelement.onclick=function(){
        checkboxchange(checkid,labelid);
    }

    let labelcontainer=document.createElement("div");
    li.appendChild(labelcontainer);
    labelcontainer.classList.add("d-flex","flex-row","label-container");


    let labelelement=document.createElement("label");
    labelcontainer.appendChild(labelelement);
    labelelement.id=labelid;
    labelelement.textContent=todolist.text;
    labelelement.setAttribute("for",checkid);


    let deletecontainer=document.createElement("div");
    labelcontainer.appendChild(deletecontainer);
    deletecontainer.classList.add("label-element");


    let deleteicon=document.createElement("i");
    deletecontainer.appendChild(deleteicon);
    deleteicon.classList.add("far","fa-trash-alt","delete-icon");
    deleteicon.onclick=function(){
        deletetask(todoid);
    }
   
}
for(let todo of todolist){
    toadddandremove(todo);
}