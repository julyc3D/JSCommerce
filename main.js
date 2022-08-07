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

}
 */
const totalCarrito = localStorage.getItem("totalCarrito");
const carrito = [];

const productos = [
    {id:1, tittle:"Picador Cogonaut Diablo", price: "$1500", description:"Picador simil cogonaut diablo | Colores a eleccion"},
    {id:2, tittle:"Picador Cogonaut Cactus", price: "$1500", description:"Picador simil cogonaut Cactus | Colores a eleccion"},
    {id:3, tittle:"Picador Cogonaut Helado", price: "$1500", description:"Picador Simil Cogonaut Helado | Colores a eleccion"},
    {id:4, tittle:"Picador Hongo Mario Bross", price: "$1100", description:"Picador Hongo | Color variable"},
    {id:5, tittle:"Soporte Butaca Competicion", price: "$1000", description:"Soporte para celular de butaca de competicion | colores a eleccion"},
    {id:6, tittle:"Toppers Personalizados", price: "$200", description:"Toppers personalizados, consultar por modelos y color"},
    {id:7, tittle:"Mate Piston", price: "$1000", description:"Mate con forma de piston | color a eleccion"},
    {id:8, tittle:"Mate Darth Vader", price: "$1000", description:"Mate personalizado Darth Vader"},
    {id:9, tittle:"Mate StormTrooper", price: "$1200", description:"Mate StormTrooper personalizado"},
    {id:10, tittle:"Macetas Robert", price: "$550", description:"Macetas Robert Personalizadas | colores a eleccion"},
    {id:11, tittle:"Macetas Personalizadas", price: "$500", description:"Macetas Personalizadas | colores a eleccion"},
    {id:12, tittle:"Cortante FLor", price: "$200", description:"Cortantes Personalizados a pedido"},

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
    <p>${producto.description}</p>
    <a class="boton" id="${idButton}" data.id="${producto.id}">Añadir Al Carrito</a>
</div>
`;
})

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        document.getElementById("cart-total").innerHTML = carrito.lenght + Number(totalCarrito);
        console.log(carrito)
        localStorage.setItem("totalCarrito", carrito.lenght)
        alert("Me Agregaste Al Carrito!");
    })
})
