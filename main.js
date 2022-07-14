/* const producto = "Picador Cogonaut"


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
*/
/* const carrito = [];

function agregarAlCarrito(producto){ 

    
    carrito.push(producto);
    console.log(carrito);
}

agregarAlCarrito({id: 1, name: "picador cogonaut", price: 1500})

agregarAlCarrito() */

const carrito = [];

function agregarAlCarrito(producto){
    carrito.push(producto);
    console.log(carrito);
}

agregarAlCarrito({id: 100, name: "Cogonaut Diablo", price: 1500})
agregarAlCarrito({id: 200, name: "Cogonaut Helado", price: 1500})
agregarAlCarrito({id: 300, name: "Cogonaut Cactus", price: 1500})
agregarAlCarrito({id: 400, name: "Soporte celular", price: 1200})

function borrarProductoDelCarrito(idDelProducto){
    const index = carrito.findIndex(producto => producto.id === idDelProducto)
    carrito.splice(index, 1)
    console.log(index)

}
borrarProductoDelCarrito(300)