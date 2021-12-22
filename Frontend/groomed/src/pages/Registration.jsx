import React, { useState } from 'react'
import { Button, Container } from '@material-ui/core'

import RegistrationForm from '../components/Forms/RegistrationForm'
import Controls from '../components/Controls/Controls'

export default function Registration() {

  const [openPopup, setOpenPopup] = useState(false)

  return (
    <Container>
      <Button
        onClick={() => setOpenPopup(true)}
        color="secondary"
        variant="contained"
      >
        Register
      </Button>

      <Controls.Popup
        text="Register Account"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <RegistrationForm setOpenPopup={setOpenPopup} />
      </Controls.Popup>
    </Container>
  );
}
