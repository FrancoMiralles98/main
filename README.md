## Descripcion de la pagina 
 Es una pagina que se dedica a la venta de instrumentos musicales, principalmente a la venta de instrumentos con cuerda,
 la idea era generar una pagina ecommerce en la que sea una manera facil a la hora de poder comprar un producto o querer informarse tambien (obvio que a esta la pagina le falta mucho)

## Dependencias utilizadas
 
 * Bootstap 5
 * firebase
 * react
 * react-router-dom

## Carpetas y archivos

` NavBar`:
  [NavBar.js]: Se encuentra los menu desplegables de las diferntes categorias de cada producto, donde tambien esta los links respectivos,
  [CarritoCompras.js]: Se encuentra el icono de compras del carrito y con el numero de productos comprados 

`  ItemListContainer`:
   [ItemListContainer.js]: Aca es donde se obtiene los productos de la base de datos (firebase) 

`  ItemList`:
   [ItemList.js]: Se itera todos los productos de la base de datos al archivo Item.js para realizar todas las carts

`  Item`:
   [Item.js]: Se arma toda la cart con sus respectivo boton para agregar al carro y su link en la imagen del producto para ver el detalle

`  ItemDetailContainer`:
   [ItemDetailContainer.js]: Se obtiene el producto de la base de datos mediante su id para luego generar la cart 

   `ItemDetail`:
   [ItemDetail.js]: Se arma toda la cart y se agreaga las los eventos de agregar o restar la cantidad que desea comprar y agregarlo al carrito

   `Error`:
   [Error404.js]: Archivo que se ejecutara cuando no se encuentra la direccion url especificada

   `Context`:
   [contextCarrito.js]: En este archivo se genera el context del carrito para utilizarlo en las demas capas, y tambien funciones propias del carrito para obtener cantidad de productos, valor total del carrito agreagar y sacar
    
`  checkout`:
   [checkout.js]: formulario para escribir los datos personales para finalizar la compra y si todos los datos se encuentran validos se finaliza la compra y se genera un codigo de seguimiento

   `Carrito`:
   [Carrito.js]: 
    [CarritoDetail.js]: Se genera la cart del producto del carrito con todas sus funciones de agreagar sacar , el subtotal del la compra del producto, la imgane con link a la descripcion y la opcion de sacar el producto del carrito
    [Carrito.js]: Se obtiene los productos del carrito para iterarlos y pasarlos como prop y generar la cart, en el caso de haber objetos en el carrito, se habilitara la opcion del boton para redirigirse al checkput para finalizar la compra.