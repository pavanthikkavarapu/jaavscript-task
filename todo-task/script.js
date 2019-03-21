document.getElementById('app-todo-text').onkeydown = function (e) {
    if (e.keyCode == 13) {
        onBtnClick();
    }
};


// Click on a close button to hide the current list item
var deleteLinkElem = document.getElementsByClassName("delete-link");
var editLinkElem = document.getElementsByClassName("edit-link");
var todoUl = document.getElementById("app-todo-list");
var inputValue = document.getElementById("app-todo-text");
var isEdited = false;
var currentIndex = null;

function createNewElement() {
    document.getElementById("list-container").className = "show";
    document.getElementById("alert-container").className = "hidden";

    var li = document.createElement("li");
    li.className = "list-group-item clearfix";
    li.id = "list-item-todo-" + todoUl.getElementsByTagName("li").length;

    var taskTitle = document.createElement("h4");
    taskTitle.className = "list-title pull-left";

    var t = document.createTextNode(inputValue.value);
    taskTitle.appendChild(t);

    li.appendChild(taskTitle);
    var parentTools = document.createElement("DIV");
    parentTools.className = "pull-right action-links";

    var editSpan = document.createElement("SPAN");
    var edittxt = document.createTextNode("Edit");
    editSpan.className = "edit-link text-primary";
    editSpan.id = todoUl.getElementsByTagName("li").length;
    editSpan.appendChild(edittxt);

    var delSpan = document.createElement("SPAN");
    var deltxt = document.createTextNode("Delete");
    delSpan.className = "delete-link text-danger";
    delSpan.id = todoUl.getElementsByTagName("li").length;
    delSpan.appendChild(deltxt);

    parentTools.appendChild(editSpan);
    parentTools.appendChild(delSpan);

    li.appendChild(parentTools);

    todoUl.appendChild(li);

    document.getElementById("app-todo-text").value = "";
    showMessage('create');
    for (var i = 0; i < deleteLinkElem.length; i++) {
        deleteLinkElem[i].onclick = function () {
            
            if (currentIndex != this.id) {
                var r = confirm("Are you sure, you want to delete?");
                if (r == true) {
                    var div = this.parentElement;
                    var liElem = div.parentElement;
                    todoUl.removeChild(liElem);
                    showMessage('delete');
                    showAlertContainer();    
                } 
                
            } else {
                alert("Can't delete during edit in progress");
            }
        }
    }

    for (var i = 0; i < editLinkElem.length; i++) {
        editLinkElem[i].onclick = function () {

            var div = this.parentElement;
            var liElem = div.parentElement;
            var listId = "#list-item-todo-" + this.id + " h4";
            var textData = document.querySelector(listId);
            inputValue.value = textData.textContent;
            isEdited = true;
            currentIndex = this.id;
            document.getElementById("app-todo-btn").innerText = "Update";


        }
    }
}

function showAlertContainer() {
    var listLength = todoUl.getElementsByTagName("li").length;
    if (listLength <= 0) {
        document.getElementById("list-container").className = "hidden";
        document.getElementById("alert-container").className = "show";
    }
}

function updateElement() {
    var listId = "#list-item-todo-" + currentIndex + " h4";
    var textData = document.querySelector(listId);
    textData.innerText = inputValue.value;
    document.getElementById("app-todo-btn").innerText = "Create";
    isEdited = false;
    currentIndex = null;
    inputValue.value = '';
    showMessage('update');
}

function onBtnClick() {
    if (inputValue.value === '') {
        alert("Enter Your Task!");
    } else {
        if (!isEdited) {
            createNewElement();
        } else {
            updateElement();
        }

    }
}

function showMessage(type){
    var messageElem = document.getElementById("alert-message");
    if(type == 'create'){
      messageElem.firstChild.innerText = 'Task Created';
    }else if(type == 'update'){
        messageElem.firstChild.innerText = 'Task Updated';
    }else{
        messageElem.firstChild.innerText = 'Task Deleted';
    }
    messageElem.className = "alert alert-success  show";
    setTimeout(function(){
        messageElem.className = "alert alert-success hidden";
    },2500);
}