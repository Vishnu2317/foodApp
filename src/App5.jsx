import React from 'react'
import Home from './CURD2/Home'
import UserName from './CURD2/UserName'


const App5 = () => {
  return (
     <>
     <BrowserRouter>
     <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/UserName'>UserName</Link></li>
        </ul>
    </nav>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/UserName' element={<UserName/>}/>
        
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default App5