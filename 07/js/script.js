var contenedor = document.querySelector("#contenedor")

document.getElementById("agregarFinal").addEventListener("click", function(){
    
    // Crear un nuevo párrafo
    let parrafo = document.createElement("p")
    //añadir texto al párrafo
    parrafo.innerText = document.getElementById("texto").value
    //añadir el párrafo al contenedor
    contenedor.appendChild(parrafo)
    //agregar el color de texto del nuevo parrafo sea rojo
    parrafo.style.color = "red";
});

//agregar párrafo al principio
document.getElementById("agregarPpio").addEventListener("click", function(){
    // Crear un nuevo párrafo
    let parrafo = document.createElement("p")
    //añadir texto al párrafo
    parrafo.innerText = document.getElementById("texto").value
    //añadir el párrafo al contenedor .prepend(parrafo)
    contenedor.prepend(parrafo)
    //agregar estilos al párrafo texto azul
    parrafo.style.color = "blue";
});

//agregar párrafo en una posición concreta
document.getElementById("agregarPosicion").addEventListener("click", function(){
    // Crear un nuevo párrafo
    let parrafo = document.createElement("p")
    //añadir texto al párrafo
    parrafo.innerText = document.getElementById("texto").value
    //añadir el párrafo al contenedor inserBefore
    contenedor.insertBefore(parrafo,contenedor.firstChild)
    //agregar estilos color del texto verde
     parrafo.style.color = "green";
});

//eliminar el primer párrafo
document.getElementById("eliminar").addEventListener("click", function(){
    //eliminar el primer párrafo
    contenedor.removeChild(contenedor.firstChild)
});

document.getElementById("eliminarTodos").addEventListener("click", function(){
    //eliminar todos los párrafos
    contenedor.innerHTML = ""
});