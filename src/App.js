import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Account from './pages/Account'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/playsound-frontend" 
              element={ <Home /> } 
            />
            <Route 
              path="/playsound-frontend/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/playsound-frontend/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route
            path='/playsound-frontend/:name'
            element={<Account></Account>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
