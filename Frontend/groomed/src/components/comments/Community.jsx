import React, { useContext } from 'react'
import { Box, Card, Container, Typography, Avatar } from '@material-ui/core'
import UserContext from '../../context/UserContext'
import Controls from '../Controls/Controls'
// import PostContainer from '../Controls/PostContainer'




export default function Community () {
  const { user } = useContext(UserContext)


  const renderPostContainer = (
    <Container>
      {user.posts?.map(post => (
        <Controls.PostContainer post={post} firstName={user.firstName} />
      ))}
    </Container>
  )

  return (
    <>
      <Container
        style={{ display: 'grid', justifyContent: 'center', marginTop: '10%' }}
      >
        <Container style={{ display: 'flex' }}>
          <Typography variant='h4' style={{ flexGrow: 1 }}>
            Congrats! Chat with other future Grooms here!
          </Typography>
          {/* <PostContainer /> */}
  
        </Container>

       
      </Container>
    </>
  )
}
