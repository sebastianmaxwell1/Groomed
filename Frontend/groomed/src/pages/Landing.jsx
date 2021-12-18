import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import LoginPage from './LoginPage'
import Registration from './Registration'

export default function Landing () {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '50vh' }}
      >
        <Container style={{ display: 'flex' }}>
          <Typography variant='h2'>Groomed</Typography>
        </Container>
        <Container>
          <Typography variant='h5'>Congratulations on your engagment!</Typography>
          <Container>
            <Typography variant='p'>
              You must first register to view our wedding planning tools!
            </Typography>
          </Container>
          <br />
        </Container>
      </Grid>

      <Registration />
      <LoginPage />
    </div>
  )
}
