const producto = "Picador Cogonaut"


for (let intentos = 0; intentos <=3; intentos++) {
    let password = parseInt(prompt("Ingrese el password"))

    if (password === 7890) { 

        function agregarAlCarrito(){
            console.log("agregaste el producto al carrito: " + producto)
            
        }
        agregarAlCarrito()
        alert("Bienvenido a este maravilloso sitio")
        break
    }
    else {
        alert("password Incorrecto, Intente nuevamente.")
    }
    if (intentos === 3) {

        alert('No estas autorizado a esta informacion')
        window.location.href = "noAutorizado.html";
    }

}
