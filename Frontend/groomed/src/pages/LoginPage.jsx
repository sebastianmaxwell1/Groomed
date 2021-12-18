import React, { useState } from 'react'
import { Button, Container } from '@material-ui/core'

import LoginForm from '../components/Forms/LoginForm'
import Controls from '../components/Controls/Controls'

export default function LoginPage() {

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <Container>

      <Button
        onClick={() => setOpenPopup(true)}
      >
        Login
      </Button>

      <Controls.Popup
        text='Login'
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <LoginForm setOpenPopup={setOpenPopup} />
      </Controls.Popup>
      
    </Container>
  )
}
