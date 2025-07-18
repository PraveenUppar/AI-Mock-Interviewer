import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Toaster from 'react-hot-toast'

import Login from "./pages/auth/login"
import Signup from "./pages/auth/signup"
import Landing from "./pages/landing"
import Dashboard from "./pages/home/dashboard"
import Interview from "./pages/interview/interview"

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element = {<Landing />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/signup' element = {<Signup />}></Route>
        <Route path='/dashboard' element = {<Dashboard />}></Route>
        <Route path='/interview/:sessionId' element = {<Interview />}></Route>
      </Routes>
    </Router>
    
    {/* <Toaster
      toastOptions = {{
        className: "",
        style: {
          fontSize:"13px",
        },
      }}
    /> */}
    </div>
  )
}

export default App