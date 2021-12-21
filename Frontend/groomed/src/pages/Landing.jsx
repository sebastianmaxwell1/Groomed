import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import LoginPage from './LoginPage'
import Registration from './Registration'
import '../Styles/Landing.css'

export default function Landing () {
  return (
    <div>
      <div className='bgimage'>
        <h1>Groomed Logo</h1>
      </div>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        textAlign = 'center'
        justifyContent='center'
        style={{ minHeight: '50vh' }}
        
     
      >
        <Container style={{ display: 'flex', alignItems:'center', justifyContent:'center' }}>
          <Typography variant='h1'>Groomed</Typography>
        </Container> 
        <br />
        <Container >
          <Typography variant='h5'>Congratulations on your engagment!</Typography>
           <br />
          <Container>
            <Typography variant='p'>
              You must first register to view our wedding planning tools!
            </Typography>
          </Container>
          <br />
        </Container>
      </Grid>

      <Container  >
        <Registration />
        <LoginPage />
      </Container>
    </div>
  )
}
