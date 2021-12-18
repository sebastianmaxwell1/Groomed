import React, { useContext } from 'react'
import { Container, Typography } from '@material-ui/core'

import Calendar from '../components/calendar'

import UserContext from '../context/UserContext'
import ResponsiveAppBar from '../components/theme/MuiAppbar'


export default function Home () {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Container>
        <Typography variant='h2'>
          Welcome! {user.firstName}
        </Typography>
        <ResponsiveAppBar />
      </Container>
      <Calendar />
      
    </Container>
  )
}
