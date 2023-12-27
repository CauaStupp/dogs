import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Outhers/Header"
import Footer from "./components/Outhers/Footer"
import Home from "./pages/Home"
import Login from "./pages/Login/Login"
import { UserStorage } from './context/UserContext' 
import User from "./pages/User/User"
import ProtectedRoute from "./guard/ProtectedRoute"
import Photo from "./components/Photo/Photo"
import UserProfile from "./pages/User/UserProfile"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/login/*' element={<Login />}/>
              <Route 
                path='conta/*' 
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />}/>
              <Route path="perfil/:user" element={<UserProfile />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
    
  )
}

export default App
