import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, HashRouter as Router} from 'react-router-dom'
import './index.css';
import Title from './Title';
import Work from './Work/Work';
import About from './About/About';
import Nav from './Nav';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
         <Nav/>
        <Switch>
            <Route exact path='/' component={Title} />
            <Route path='/work' component={Work} />
            <Route path='/about' component={About} />
        </Switch>
    </Router>, 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
