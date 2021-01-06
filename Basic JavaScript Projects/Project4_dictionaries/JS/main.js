// Using KVPs
function myDictionary() { 
    var vessel = {
        Type:"Kayak",
        Make:"Necky",
        Model:"Manitou",
        Color:"Orange",
        Length:13,
        Type:"boat"  // Duplicate key for testing
    };
    delete vessel.Type;  // Delete KVP prior to display for demonstration
    document.getElementById("dictionary").innerHTML = vessel.Type;
}