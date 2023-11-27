import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks'

export default function Home() {
  // Hooks
  const navigate = useNavigate()
  const { auth, checkAuth } = useAuth(() => navigate('/login'))
  // Event handlers
  const sensitiveStuff = async () => {
    await checkAuth()
    // doing sensitive stuff
  }
  // JSX
  if (!auth) {
    return (<div>Please wait...</div>)
  }
  return (
    <div className="screen">
      <h3>Home Page</h3>
      <button onClick={sensitiveStuff}>
        Interact with site...
      </button>
    </div>
  )
}
