import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Index from './views/Index'
import Register from './views/Register'
import RegistAddress from './views/Register/Address'


export default function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Index} />
            <Route path="/register" component={Register} />
            <Route path="/register/address" component={RegistAddress} />
        </BrowserRouter>
    )
}