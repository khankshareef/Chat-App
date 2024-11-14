import React, { useContext } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import { AuthContext } from './context/AuthContext'


function App() {
  const {currentUser}=useContext(AuthContext)
  //console.log(currentUser)
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      return <Navigate to="/Login"/>;
    }
    return children
  };
  return (
    <div className='Container'>
      <Router>
      <Routes>
        <Route path="/"
        element={<ProtectedRoute>
          <HomePage/>
        </ProtectedRoute> }/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Register" element={<RegisterPage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;