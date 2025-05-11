import { useState } from 'react'
import './App.css'
import Registration from './components/Registration'
import Login from './components/Login'
import UserData from './components/UserData'

function App() {
  const [currentPage, setCurrentPage] = useState('register')

  return (
    <div className="container">
      <div className="nav-buttons">
        <button 
          className={currentPage === 'register' ? 'active' : ''} 
          onClick={() => setCurrentPage('register')}
        >
          Register
        </button>
        <button 
          className={currentPage === 'login' ? 'active' : ''} 
          onClick={() => setCurrentPage('login')}
        >
          Login
        </button>
        <button 
          className={currentPage === 'users' ? 'active' : ''} 
          onClick={() => setCurrentPage('users')}
        >
          Users
        </button>
      </div>

      {currentPage === 'register' ? <Registration /> : 
       currentPage === 'login' ? <Login /> : <UserData />}
    </div>
  )
}

export default App
