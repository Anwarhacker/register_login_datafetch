import { useState, useEffect } from 'react'
import axios from 'axios'

function UserData() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users')
        setUsers(response.data)
      } catch (err) {
        setError('Failed to fetch user data')
      }
    }

    fetchUsers()
  }, [])

  return (
    <div className="user-data-container">
      <h1>User Data</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="users-grid">
        {users.map(user => (
          <div key={user._id} className="user-card">
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserData