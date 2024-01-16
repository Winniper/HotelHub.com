import { useState } from 'react'
import Layout from './layouts/Layout'
import Error from './components/Error'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout >
              <p>Home Page</p>
            </Layout>}/>
            <Route path='*' element={<Error></Error>}/>
            <Route path='/404' element={<Error></Error>}/>
        </Routes>
    </Router>
  )
}

export default App
