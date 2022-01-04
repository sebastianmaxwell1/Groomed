import React, { useContext } from 'react'
import { Card, Container, Typography } from '@material-ui/core'
import Calendar from '../components/calendar'
import UserContext from '../context/UserContext'
import ResponsiveAppBar from '../components/theme/MuiAppbar'
import Weather from '../components/weather'
import Hero from '../components/banner'
import MediaCard from '../components/card'



export default function Home () {
  const { user } = useContext(UserContext)

  return (
    
    <Container>
      <Container>
        {/* <Typography variant='h4'>
          Welcome! {user.firstName}
        </Typography> */}
        <ResponsiveAppBar />
      </Container>
      <Hero />
      <Calendar />

      {/* <MediaCard /> */}
      {/* <Weather />      */}
    </Container>
  )
}
