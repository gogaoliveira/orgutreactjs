import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import Amigos from 'pages/Amigos';
import Comunidades from 'pages/Comunidades';
import Fotos from 'pages/Fotos';
import Videos from 'pages/Videos';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/Amigos">
                    <Amigos />
                </Route>
                <Route path="/Home">
                    <Home />
                </Route>
                <Route path="/Comunidades">
                    <Comunidades />
                </Route>
                <Route path="/Fotos">
                    <Fotos />
                </Route>
                <Route path="/Videos">
                    <Videos />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
