import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Buyers from "./Components/Buyers";
import Farmers from "./Components/Farmers";
import Logistics from "./Components/Logistics";
import Letsconnect from "./Components/Letsconnect";
import GetStarted from "./Components/GetStarted";


import Project1 from "./Components/Project1";
import Project2 from "./Components/Project2";
import Project3 from "./Components/Project3";
import Project4 from "./Components/Project4";

import ReadMore from "./Components/ReadMore";
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

import './Login.css';
import Login1 from './Login1';
import Register1 from './Register1';
import ProductList from './ProductList';
import Buyerloc from './Buyerloc';

ReactDOM.render(
    
    <BrowserRouter>
    <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={Aboutus} />
            <Route exact path='/buyers' component={Buyers} />
            <Route exact path='/farmers' component={Farmers} />
            <Route exact path='/logistics' component={Logistics} />
            <Route exact path='/letsconnect' component={Letsconnect} />
            <Route exact path='/productlist' component={ProductList} />
            <Route exact path='/getstarted' component={GetStarted} />
            <Route exact path='/project1' component={Project1} />
            <Route exact path='/project2' component={Project2} />
            <Route exact path='/project3' component={Project3} />
            <Route exact path='/project4' component={Project4} />
            <Route exact path='/readmore' component={ReadMore} />
            <Route exact path='/orders' component={Buyerloc} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            {/* <Route exact path='/login1' component={Login1} />
            <Route exact path='/register1' component={Register1} /> */}
            <Route path='/dashboard' component={Dashboard} />
            {/* <Route component={NotFound}/> */}
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);