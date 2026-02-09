const elements = document.getElementsByTagName("*");
let text = "";
for (let i = 0; i < elements.length; i++) {
    text += elements[i].tagName + "<br>";
}
document.getElementById("demo").innerHTML = text;