function newColor() {
    var text = document.getElementById("text").innerHTML;
    var newText = text.fontcolor("red");
    document.getElementById("text").innerHTML = newText;
}