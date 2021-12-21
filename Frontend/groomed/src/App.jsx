import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, StylesProvider } from '@material-ui/core'
import { theme } from "../src/theme/theme"
// import CssBaseline from '@material-ui/core/CssBaseline'
// import { lightTheme, darkTheme } from './components/theme/Theme'
import Home from './pages/Home'
import Landing from './pages/Landing'
import PrivateRoute from './components/theme/PrivateRoute'
import { UserProvider } from './context/UserContext'
// import Breakroom from './pages/Breakroom'

export default function App () {

    // const [darkMode, setDarkMode] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    // const theme = darkMode ? darkTheme : lightTheme
  
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      setIsAuth(token !== null)
    }
  
    useEffect(() => {
      checkAuth()
    }, [isAuth])
  
    return (
      <ThemeProvider theme={theme}>
      <UserProvider>

          <Routes>
            <Route path='/' element={<Landing />} />
  
            <Route 
              path='/home' 
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } 
            />

  
          
          </Routes>
   
      </UserProvider>
      </ThemeProvider>
    )
  }
  


















// class App extends Component {
//     state = { }
//     render() {
//         return (
//             <>
//             <h1>Groomed:</h1>
//             <Calendar />
//             <Weather />
//             {/* <SportsScores /> */}
            
            
            
//             </>
//         );
//     }
// }
// export default App;