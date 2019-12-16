import React, {Component} from 'react';
import {Route, Router, Switch, Redirect} from "react-router-dom";
import {history, PrivateRouteAdmin} from './_helpers'
import {Home,  Login, Projects} from "./components";
import {AdminLayout} from "./_layouts";
import {connect} from "react-redux";
// import {gulfServices} from "./_services";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    {!localStorage.getItem('user') && <Redirect to='/login'/>}
                    <Switch>
                        <PrivateRouteAdmin layout={AdminLayout} component={Home} path={'/'} exact/>
                        <PrivateRouteAdmin layout={AdminLayout} component={Projects} path={'/projects'} exact/>
                        <PrivateRouteAdmin layout={AdminLayout} component={Projects} path={'/today'} exact/>
                        <Route component={Login} exact path={'/login'}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default connect()(App);
