import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'


import {
  Card,
  ButtonGroup,
  CardContent,
  CardHeader,
  Container,
  IconButton,
  Typography,
  Avatar
} from '@material-ui/core'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ReplyIcon from '@mui/icons-material/Reply'


// async addComment(comment){
//     console.log(comment)
//     try{
//         let res = await axios.post('http://localhost:8000/api/comment', comment);
//         alert('Comment Added!')
//         this.setState({
//             comment:res.data
//         });
//     }
//     catch(e){
//         console.log(e.message)
//     }

//   _handleSubmit(event) { 
//     event.preventDefault();   
//     let author = this._author;
//     let body = this._body;
//     this.props.addComment(author.value, body.value);
//   }
// } 






export default function PostContainer (props) {
  const { user, post } = useContext(UserContext)

  return (
    <Container>
      <Card>
        <CardHeader
          avatar={
            <Avatar>
              <AccountBoxIcon />
            </Avatar>
          }
          action={
            <ButtonGroup variant='contained'>
              <IconButton>
                <ThumbUpIcon />
              </IconButton>
              <IconButton>
                <ThumbDownIcon />
              </IconButton>
            </ButtonGroup>
          }
          title={`${user.firstName + " " + user.lastName} said:`}
        />

        <CardContent>
          <Card style={{ display: 'flex' }}>
            <Typography style={{ flexGrow: 1 }}>{post}</Typography>
            <IconButton>
              <ReplyIcon />
            </IconButton>
          </Card>
        </CardContent>
      </Card>
    </Container>
  )
}
