import Index from "./pages/Index";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hombres from "./pages/Hombres";
import Mujer from "./pages/Mujer";
import Selecciones from "./pages/Selecciones";
import Tiendas from "./pages/Tiendas";
import Login from "./pages/Login";
import Compra from "./pages/Compra";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/hombre">
          <Hombres />
        </Route>
        <Route path="/mujer">
          <Mujer />
        </Route>
        <Route path="/selecciones">
          <Selecciones />
        </Route>
        <Route path="/tiendas">
          <Tiendas />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/compra">
          <Compra />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
