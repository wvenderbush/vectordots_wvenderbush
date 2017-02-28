var svgspace = document.getElementById("svgcanvas");
//var svg = document.getElementNS("http://www.w3.org/2000/svg", "circle");

lastline = null;

svgspace.addEventListener("click", function(e){
    e.preventDefault();
    if (lastline != null){
        lastline.setAttribute("x2", e.offsetX);
        lastline.setAttribute("y2", e.offsetY);
        svgspace.appendChild(lastline)
    }
    var element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    element.setAttribute("cx", e.offsetX);
    element.setAttribute("cy", e.offsetY);
    element.setAttribute("r", 40);
    element.setAttribute("fill", "red");
    element.setAttribute("stroke", "black");
    svgspace.appendChild(element);
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("stroke", "black");
    line.setAttribute("x1", e.offsetX);
    line.setAttribute("y1", e.offsetY);
    lastline = line;

})

var clearBut = document.getElementById("clear");
clearBut.addEventListener("click", function() {
    while (svgspace.lastChild) {
        svgspace.removeChild(svgspace.lastChild);
    }
    lastline = null;
});



