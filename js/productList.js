function refrescarEventoAddToCart()
{
	var addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', addToCartClicked);
});

}

function cargarListado()
{
	
	fetch('products.json').then(response => {
  return response.json();
}).then(data => {
  
  var producto = '  <div class="row mx-5 py-4">';
  
  for (var i = 0; i < data.length; i++) {   
	  
	  if (i!=0 && i%3==0)
	  {
		 producto=producto+'</div>'+'  <div class="row mx-5 py-4">';
	  }
	  
	    producto=producto+'<div class="col ml-5">  <div class="card item shadow " style="width: 18rem;"><img src='+data[i].img+' alt="imagen "'+data[i].product+' class="card-img-top item-image" >	<div class="card-body">			  <h1 class="item-title">'+data[i].product+'</h1>			  <p class="item-price">$'+data[i].price+'</p>			  <button id="btn-cart" class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>			</div>		  </div>		</div>';
	  	          
         console.log('Item: '+i+' '+data[i].product+' '+data[i].price);//Ejemplo como acceder a las propiedades
  } 
  producto=producto+'</div>';
 
  console.log('producto html: '+producto);
	 
  var productos = document.getElementById('productos');
  productos.innerHTML =productos.innerHTML+producto;
  refrescarEventoAddToCart();
}).catch(err => {
  console.log(err)
});	
}

cargarListado();//Carga el listado de productos
