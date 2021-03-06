import React from 'react';
import './App.css';
import Header from './components/Header';
import Shop from './components/shop/Shop';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/inventory/Inventory';
import NotFound from './components/notFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/" exact>
            <Shop />
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
