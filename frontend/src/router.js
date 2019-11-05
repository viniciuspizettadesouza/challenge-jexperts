import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Register from './views/Register'

import Index from './views/Index/index'

export default function Router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Index} />
            <Route path="/register" component={Register} />
        </BrowserRouter>
    )
}