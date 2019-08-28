import * as React from 'react'
import './scss/app';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Blogs from './Components/Blogs';
import Home from './Components/Home';
import Admin from './Components/Admin';



export interface AppProps {

}

const App: React.SFC<AppProps> = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/blogs' component={Blogs} />
                <Route exact path='/admin/:id' component={Admin} />
            </Switch>
        </Router>
    );
}

export default App;