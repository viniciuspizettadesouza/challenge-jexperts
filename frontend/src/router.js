import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//import AddUser from './pages/AddUser';
//<Route path="/add-user" component={AddUser} />

import Index from './pages/Index/index';

export default function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Index} />
        </BrowserRouter>
    );
}