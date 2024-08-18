
import './App.css';
import './assets/css/starts.css';
import cookies from './assets/media/cookieShop.jpg';
import products from './assets/data/products';

function App() {
 const  productsList = products.map((product) => {
  return (
    <div className="item-container"> 
  <img src={product.image} alt="Saleh's cookies 1" />
  <h3>{product.name} </h3>
  <p>{product.price} </p>
</div>

  );
});





  // const products = [
  //   {
  //       name: "Chocolet Chip Cookies",
  //       price: 10.00,
  //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FM3I5AzHVNnSZgU10jcbylGyXNWk8mUrog&s",
        
  //   },
  //   {
  //       name: "Cute Cookies",
  //       price: 10.00,
  //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8FM3I5AzHVNnSZgU10jcbylGyXNWk8mUrog&s",
    
  //   }
    
  //   ];

  return (
    // <div>
    <div className="container">
      <h1> Cookies and Beyond</h1>
      <p> Where cookies maniacs gather  </p>
      <img src={cookies} alt="Saleh's cookies" className="img-style" />        
    {/* </div> */}

    {/* <div className="item-section">
      <div className="item-container"> 
        <img src={products[0].image} alt="Saleh's cookies 1" />
        <h3>{products[0].name} </h3>
        <p>{products[0].price} </p>
      </div>


      <div className="item-container"> 
        <img src={products[1].image} alt="Saleh's cookies 1" />
        <h3>{products[1].name} </h3>
        <p>{products[1].price} </p>
      </div> */}

    {/* <div className="item-section">
      {products.map((product) => {
        return (
          <div className="item-container"> 
        <img src={product.image} alt="Saleh's cookies 1" />
        <h3>{product.name} </h3>
        <p>{product.price} </p>
      </div>

        );
      })} */}

    <div className="item-section">{productsList}</div>




</div>


  );
}

export default App;
