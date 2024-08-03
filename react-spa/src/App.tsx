import { useState } from 'react'
import AuthContext from './contexts/AuthContext'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
      <div className='bg-blue-300 p-3'>
      {
        isAuthenticated ?  <LogoutButton/> : <LoginButton/>
      }
      </div>
      <div className='container mx-auto px-3'>
        {
          isAuthenticated ? <div>You're logged in</div> : <div>You're logged out</div>
        }
      </div>
    </AuthContext.Provider>
  )
}

export default App
