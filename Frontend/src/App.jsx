import React from 'react'
import {BrowserRouter as Router , Route, Routes} from "react-router-dom"
import {Toaster} from "react-hot-toast"

import Dashboard from "./pages/Home/Dashboard"
import LandingPage from "./pages/LandingPage"
import InterviewPrep from './pages/InterviewPrep/InterviewPrep'
import UserProvider from './context/userContext'
const App = () => {
  return (
    <UserProvider>
    <div>
     <Router>
        <Routes>
          {/* {Default Routes} */}
          <Route path="/" element={<LandingPage/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/interview-prep:/sessionid' element={<InterviewPrep/>} />
        </Routes>
      </Router>

      <Toaster
       toastOptions={{
        className:"",
        style:{
          fontSize:"13px"
        },
       }}
      />
    </div>
  </UserProvider>
  )
}

export default App
