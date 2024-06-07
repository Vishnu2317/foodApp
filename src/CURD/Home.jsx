import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <h1>Homepage</h1>
    <h3><Link to='/users'>Click here to go users page</Link></h3>
    </>
  )
}

export default Home