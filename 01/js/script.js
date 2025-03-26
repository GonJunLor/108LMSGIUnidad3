var titulo = document.getElementById("titulo")
var parrafo = document.getElementsByClassName("parrafo")
var cuerpo = document.getElementById("cuerpo")

titulo.innerHTML = "Nuevo titulo"
parrafo[0].innerText = "Parrafo 1 modificado"
parrafo[1].innerText = "Parrafo 2 modificado"
parrafo[2].innerText = "Parrafo 3 modificado"

parrafo[0].outerHTML = "<div>Parrafo 11 modificado</div>"

cuerpo.style.backgroundColor="#f4f4f4"
cuerpo.style.textAlign="center"

titulo.style.color="#333"
titulo.style.textTransform="uppercase"
titulo.style.fontWeight="bold"
titulo.style.marginBottom="15px"

array.forEach(p => {
    p.style.color="#e74c3c"
});