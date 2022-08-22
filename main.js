const carrito = JSON.parse(localStorage.getItem("carrito")) ?? []

for (let intentos = 0; intentos <=2; intentos++) {
    let password = parseInt(prompt("Ingrese el password"))

    if (password === 7890) { 

        Swal.fire(
            'Contraseña Correcta',
            'Felicidades!',
            'success'
        )
        
        break
    }
    else {
        alert("password Incorrecto, Intente nuevamente.")
    }
    if (intentos === 2) {

        alert('No estas autorizado a esta informacion')
        window.location.href = "noAutorizado.html";
    }

}
/* HECHO CON FETCH */
/* console.log(carrito);
document.getElementById("cart-total").innerHTML = localStorage.getItem("totalCarrito") ?? 0 */
/* 

const productos = [
    {id:"1", tittle:"Picador Cogonaut Diablo", price: "$1500", description:"Picador simil cogonaut diablo | Colores a eleccion", img:"../JavaScript Coder/Imagenes/picaDiablo1.jpg"},
    {id:"2", tittle:"Picador Cogonaut Cactus", price: "$1500", description:"Picador simil cogonaut Cactus | Colores a eleccion", img:"../JavaScript Coder/Imagenes/picaCactus1.jpg"},
    {id:"3", tittle:"Picador Cogonaut Helado", price: "$1500", description:"Picador Simil Cogonaut Helado | Colores a eleccion", img:"../JavaScript Coder/Imagenes/picaHelado1.jpg"},
    {id:"4", tittle:"Picador Hongo Mario Bross", price: "$1100", description:"Picador Hongo | Color variable", img:"../JavaScript Coder/Imagenes/picaHongo.jpg"},
    {id:"5", tittle:"Soporte Butaca Competicion", price: "$1000", description:"Soporte para celular de butaca de competicion | colores a eleccion", img:"../JavaScript Coder/Imagenes/soporteCelu1.jpg"},
    {id:"6", tittle:"Toppers Personalizados", price: "$200", description:"Toppers personalizados, consultar por modelos y color", img:"../JavaScript Coder/Imagenes/toppers.jpg"},
    {id:"7", tittle:"Mate Piston", price: "$1000", description:"Mate con forma de piston | color a eleccion", img:"../JavaScript Coder/Imagenes/matePiston.jpg"},
    {id:"8", tittle:"Mate Darth Vader", price: "$1000", description:"Mate personalizado Darth Vader", img:"../JavaScript Coder/Imagenes/mateDarth.jpg"},
    {id:"9", tittle:"Mate StormTrooper", price: "$1200", description:"Mate StormTrooper personalizado", img:"../JavaScript Coder/Imagenes/mateStorm.jpg"},
    {id:"10", tittle:"Macetas Robert", price: "$550", description:"Macetas Robert Personalizadas | colores a eleccion", img:"../JavaScript Coder/Imagenes/macetasMuñecos.jpg"},
    {id:"11", tittle:"Macetas Personalizadas", price: "$500", description:"Macetas Personalizadas | colores a eleccion", img:"../JavaScript Coder/Imagenes/macetasVarias.jpg"},
    {id:"12", tittle:"Cortante FLor", price: "$200", description:"Cortantes Personalizados a pedido", img:"../JavaScript Coder/Imagenes/cortanteFlor.jpg"},

];

let cards = ''

productos.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="card">
    <div class="precio">
        <p>${producto.price}</p>
    </div>
    <img src="${producto.img}">
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
        localStorage.setItem("carrito", JSON.stringify(carrito));
        document.getElementById("cart-total").innerHTML = carrito.length;
        console.log(carrito)
        localStorage.setItem("totalCarrito", JSON.stringify(carrito.length))
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Me Añadiste Al Carrito',
            showConfirmButton: false,
            timer: 1200
          })
    })
}) */
Fetch ("productos.json")

async function LlenarCarrito(){
    await fetch ("productos.json")
    .then(response => response.json())
    .then(j =>{
    
    j.forEach((producto) => {
        const idButton = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="card">
    <div class="precio">
        <p>${producto.price}</p>
    </div>
    <img src="${producto.img}">
    <h4>${producto.tittle}</h4>
    <p>${producto.description}</p>
    <a class="boton" id="${idButton}" data.id="${producto.id}">Añadir Al Carrito</a>
</div>
`;
})

j.forEach((producto) => {
    const idButton = `add-cart${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        document.getElementById("cart-total").innerHTML = carrito.length;
        console.log(carrito)
        localStorage.setItem("totalCarrito", JSON.stringify(carrito.length))
        alert("Me Agregaste Al Carrito!");
    })
})
})
}
LlenarCarrito();