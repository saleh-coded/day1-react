
import './App.css';
import './assets/css/starts.css';
import cookies from './assets/media/cookieShop.jpg';
// import products from './assets/data/products';
// import ProductItem from './Components/ProductItem';
import ProductList from './Components/ProductList';

function App() {
  return (
    // <div>
    <div className="container">
      <h1> Cookies and Beyond</h1>
      <p> Where cookies maniacs gather  </p>
      <img src={cookies} alt="Saleh's cookies" className="img-style" />        
    {/* </div> */}

    <ProductList />




</div>


  );
}

export default App;
