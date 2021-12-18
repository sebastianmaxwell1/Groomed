// import React, { Component } from 'react';
// import Calendar from './components/calendar';
// import SportsScores from './components/sportsScores';
// import Weather from './components/weather';



import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { ThemeProvider, StylesProvider } from '@material-ui/core'
// import CssBaseline from '@material-ui/core/CssBaseline'

// import { lightTheme, darkTheme } from './components/theme/Theme'
// import Home from './pages/Home'
import Landing from './pages/Landing'
// import Error from './pages/Error'
// import Profile from './pages/Profile'
// import MuiAppbar from './components/MuiAppbar'
// import PrivateRoute from './components/PrivateRoute'
import { UserProvider } from './context/UserContext'
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
      <UserProvider>
        {/* <StylesProvider injectFirst>
        <ThemeProvider theme={theme}> */}
          {/* <CssBaseline /> */}
    
        
  
          <Routes>
            <Route path='/' element={<Landing />} />
  
            {/* <Route 
              path='/home' 
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              } 
            /> */}

  
            {/* <Route path='*' element={<Error />} /> */}
          </Routes>
        {/* </ThemeProvider>
        </StylesProvider> */}
      </UserProvider>
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