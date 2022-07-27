/* const producto = "Picador Cogonaut" */


/* for (let intentos = 0; intentos <=3; intentos++) {
    let password = parseInt(prompt("Ingrese el password"))

    if (password === 7890) { 

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

} */
/* 
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
borrarProductoDelCarrito(300) */
const carrito = [];

const productos = [
    {id:1, tittle:"Picador Cogonaut Diablo", price: 1500},
    {id:2, tittle:"Picador Cogonaut Cactus", price: 1500},
    {id:3, tittle:"Picador Cogonaut Helado", price: 1500},
    {id:4, tittle:"Picador Hongo Mario Bross", price: 1500},
    {id:5, tittle:"Soporte Butaca Competicion", price: 1500},
    {id:6, tittle:"Toppers Personalizados", price: 1500},
    {id:7, tittle:"Mate Piston", price: 1500},
    {id:8, tittle:"Mate Darth Vader", price: 1500},
    {id:9, tittle:"Mate StormTrooper", price: 1500},
    {id:10, tittle:"Macetas Robert", price: 1500},
    {id:11, tittle:"Macetas Personalizadas", price: 1500},
    {id:12, tittle:"Cortante FLor", price: 1500},

];

let cards = ''

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="card">
    <div class="precio">
        <p>${producto.price}</p>
    </div>
    <img src="../JavaScript Coder/Imagenes/picaDiablo1.jpg">
    <h4>${producto.tittle}</h4>
    <p>Picador simil cogonaut diablo | Colores a eleccion</p>
    <a class="boton" id="${idButton}">Añadir Al Carrito</a>
</div>`;
})

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        alert("Me Agregaste Al Carrito!");
    })
})
