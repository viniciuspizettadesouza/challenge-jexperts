import React, { useState } from 'react'
import './register.css'

import api from '../../services/api'

export default function Login({ history }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [position, setPosition] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [superior, setSuperior] = useState('')
    //const [address, setAddress] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        await api.post('/store-user', {
            name, email, telephone, position, login, password, cpf, superior

        })
        history.push(`/`)
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Telephone"
                        value={telephone}
                        onChange={e => setTelephone(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="position"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="CPF"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Superior"
                        value={superior}
                        onChange={e => setSuperior(e.target.value)}
                    />
                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}