import React from 'react'

import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { UilEnvelope } from '@iconscout/react-unicons'

function Bio() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
  return (
    <div>
      <Button auto css={{ color: '#a8a29e', backgroundColor: '#fafaf9' }} onClick={handler}>
        Biography
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Edit Your Bio
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            css={{ color: '#78716c' }}
            size="lg"
            placeholder="Share a little about yourself"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto css={{ color: '#ffffff', backgroundColor: '#78716c' }} onClick={closeHandler}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Bio
