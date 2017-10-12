import React, {Component} from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    render(){
        return(
            <h1>react loaded</h1>  
        )
    }
}

render((
    <Router>
        <App />
    </Router>    
),document.getElementById("app"))