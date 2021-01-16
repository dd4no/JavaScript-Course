function showMove(piece) {
    var movement = piece.getAttribute("data-movement");
    alert("The " + piece.innerHTML + " moves " + movement);
}