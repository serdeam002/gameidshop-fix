import {BrowserRouter, Switch, Route} from "react-router-dom"
import App from "./App";
import FormComponent from "./components/FormComponent"
import NavbarComponent from "./components/NavbarComponent"
import SingleComponent from "./components/SingleComponent"

const MyRoute = ()=>{
    return(
        <BrowserRouter>
        <NavbarComponent/>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/create" exact component={FormComponent}/>
                <Route path="/blog/:slug" exact component={SingleComponent}/>
            </Switch>
        </BrowserRouter>
    )
}

export default MyRoute;