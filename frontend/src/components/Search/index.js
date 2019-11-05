import React, { useEffect, useState, useCallback } from "react"
import stringSimilarity from 'string-similarity'

import "./search.css"

import api from '../../services/api';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [newUsers, setNewUsers] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users', {

      })
      setUsers(response.data)
    }
    loadUsers();
  });

  const search = useCallback(event => {
    setUser(event.target.value)
    if (event.target.value.length > 1) {
      setNewUsers(users.filter(p => stringSimilarity.compareTwoStrings(p.name, user) || stringSimilarity.compareTwoStrings(p.name, user) > 0.1))
    } else if (event.target.value.length === 0) {
      setNewUsers(users)
    }
  }, [user, users])

  return (
    <div className="user-container">
      <button type="submit" placeholder="Search Users" value={user} onClick={search}>See all Users</button>
      <div>
        <input type="text" placeholder="Search users by name" value={user} onChange={search} />
      </div>

      <div>
        {newUsers.length > 0 ? (
          <div>
            {newUsers.map(user => (
              <div key={user._id}>
                <div>
                  <p>Name: {user.name}</p>
                  <p>E-mail: {user.email}</p>
                  <p>Telephone: {user.telephone}</p>
                  <p>Position: {user.position}</p>
                  <p>Login: {user.login}</p>
                  <p>CPF: {user.cpf}</p>
                  <p>Superior: {user.superior}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
            <div className="empty">
              <p>No user found :(</p>
            </div>
          )}
      </div>
    </div>
  )
}
export default Search