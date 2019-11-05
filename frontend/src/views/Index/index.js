import React from 'react'
import './index.css'

import Search from '../../components/Search/index'
import Header from '../../components/Header/index'

export default function Login({ history }) {

    async function handleAccount(e) {
        e.preventDefault()
        history.push(`/register`)
    }

    return (
        <div>
            <Header />
            <div className="container">
                <form onClick={handleAccount}>
                    <button className="button" type="button">Create User</button>
                </form>
            </div>
            <Search />
        </div>
    )
}