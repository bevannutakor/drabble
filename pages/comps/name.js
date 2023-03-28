import React, {useState,useContext} from 'react'
import axios from 'axios'

import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { UilEnvelope } from '@iconscout/react-unicons'

import { UserContext } from '../../Contexts/UserProvider';

function Name() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("")
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const { currentUser } = useContext(UserContext);

  const updateName = () => {
    currentUser.updateProfile({
      displayName: name
    })
    setVisible(false);
  }

  return (
    <div>
      <Button auto css={{ color: '#a8a29e', backgroundColor: '#fafaf9' }} onClick={handler}>
        Display Name
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
              Edit Your Display Name
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              clearable
              bordered
              fullWidth
              css={{ color: '#78716c' }}
              size="lg"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Close
            </Button>
            <Button auto css={{ color: '#ffffff', backgroundColor: '#78716c' }} onClick={updateName}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
  
    </div>
  )
}

export default Name
