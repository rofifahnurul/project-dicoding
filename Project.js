var foto1 = document.getElementById("foto1");
var foto2 = document.getElementById("foto2");
foto1.addEventListener("mouseover", function() {
    foto1.setAttribute("src", "assets/foto3.jpg");
})

foto2.addEventListener("mouseover", function() {
    foto2.setAttribute("src", "assets/foto4.jpg");
})
foto1.addEventListener("mouseout", function() {
    foto1.setAttribute("src", "assets/foto1.jpg");
})
foto2.addEventListener("mouseout", function() {
    foto2.setAttribute("src", "assets/foto2.jpg");
})