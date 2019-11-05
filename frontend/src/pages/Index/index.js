import React from 'react';
import './index.css';

export default function Login({ history }) {

    async function handleAccount(e) {
        e.preventDefault();
        history.push(`/add-user`);
    }

    return (
        <div>
            <div className="container">
                <form onClick={handleAccount}>
                    <button className="button" type="button">Adicionar Usuário</button>
                </form>
            </div>
        </div>
    );
}