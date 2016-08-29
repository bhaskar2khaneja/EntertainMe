var xmlhttp = new XMLHttpRequest();
var url = "https://api.icndb.com/jokes/random/jokes/random";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var response = JSON.parse(xmlhttp.responseText);
        extractAndDisplay(response);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function extractAndDisplay(response) {
    document.getElementById("joke").innerHTML = response["value"]["joke"];
}