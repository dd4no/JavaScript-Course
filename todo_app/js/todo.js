// Dave Defourneaux
// dave.defourneaux@gmail.com
// github.com/dd4no

var t = new Date();
document.getElementById("time").innerHTML = t;

function getList() {
    var List = new Array;
    var ListString = localStorage.getItem('todo');
    if (ListString !== null) {
        List = JSON.parse(ListString);
    }
    return List;
}

function addTask() {
    var task = document.getElementById('task').value;
    var List = getList();
    List.push(task);
    localStorage.setItem('todo', JSON.stringify(List));
    document.getElementById('task').value = "";
    showList();
    return false;
}

function showList() {
    var List = getList();
    var html = "<ul>";
    for ( var i=0; i<List.length; i++ ) {
        html += "<li>" + List[i] + "<button class='remove' id='" + i + "'>&times;</button></li>";
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName("remove");
    for (var i=0;i<buttons.length;i++) {
        buttons[i].addEventListener('click', deleteTask);
    }

}

function deleteTask() {
    var item = this.getAttribute('id');
    var List = getList();
    List.splice(item,1);
    localStorage.setItem('todo', JSON.stringify(List));
    showList();
    return false;
}

document.getElementById('add').addEventListener('click', addTask);
showList();




