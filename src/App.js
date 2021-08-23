import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import cartScreen from "./components/cartscreen";
import DisplayProduct from "./components/displayProduct";
import checkoutScreen from "./components/checkoutScreen";
import updateProduct from "./components/updateProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/addtocart" component={cartScreen} />
            <Route path="/displayproduct" component={DisplayProduct} />
            <Route path="/updateproduct" component={updateProduct} />
            <Route path="/checkout" component={checkoutScreen} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
