import React, { useState } from 'react'
import './index.css'

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
    const [address, setAddress] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        await api.post('/add-user', {
            name, telephone, email
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
                        type="position"
                        placeholder="position"
                        value={position}
                        onChange={e => setPosition(e.target.value)}
                    />
                    <input
                        type="login"
                        placeholder="login"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        type="cpf"
                        placeholder="cpf"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                    <input
                        type="superior"
                        placeholder="superior"
                        value={superior}
                        onChange={e => setSuperior(e.target.value)}
                    />
                    <input
                        type="address"
                        placeholder="address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                    <button type="submit">Criar conta</button>
                </form>
            </div>
        </div>
    )
}