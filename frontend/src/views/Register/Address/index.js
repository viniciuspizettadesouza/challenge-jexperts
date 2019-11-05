import React, { useState } from 'react'
import './address.css'

import api from '../../../services/api'

export default function Login({ history }) {
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [complement, setComplement] = useState('')
    const [district, setDisctrict] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [cep, setCep] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        await api.post('/store-user/address', {
            street, number, complement, district, city, state, cep
        })
        history.push(`/`)
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Street"
                        value={street}
                        onChange={e => setStreet(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Complement"
                        value={complement}
                        onChange={e => setComplement(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="District"
                        value={district}
                        onChange={e => setDisctrict(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="State"
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="CEP"
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}