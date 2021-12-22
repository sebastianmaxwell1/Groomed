import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import LoginPage from './LoginPage'
import Registration from './Registration'
import '../Styles/Landing.css'


export default function Landing () {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        style={{ minHeight: "30vh" }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          
          }}
        >
          <Typography className="bgimage" variant="h2">Groomed</Typography>
        </Container>
        <Container>
          <Typography className="reg" variant="p">
          You must first register to view our wedding planning tools!
          </Typography>
        </Container>
      </Grid>
      <br />
      <Container>
        <LoginPage />
        <br />
        <Registration />
      </Container>
    </div>
  );
}
