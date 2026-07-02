const boton = document.getElementById("btn-modo");
boton.addEventListener("click", () => {
 document.body.classList.toggle("oscuro");
 if(document.body.classList.contains("oscuro")){
    boton.innerHTML = "☀️";
}else{
    boton.innerHTML = "🌙";
}

});


const formulario = document.getElementById("form");
const msj = document.getElementById("mensaje");
formulario.addEventListener("click", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const consulta = document.getElementById("consulta").value;
    if(nombre === "" || email === "" || consulta === ""){
       msj.innerHTML = alert("Complete todos los campos");  
    }
  
});