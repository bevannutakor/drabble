import React, {useState, useContext} from 'react';
import axios from 'axios';

import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { UilEnvelope } from '@iconscout/react-unicons';

import { UserContext } from '../../Contexts/UserProvider';

function Bio() {
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const [bio, setBio] = useState("");

    const { currentUser } = useContext(UserContext);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };

    const saveBio = async () => {
      await axios.post("api/saveBio", {
        headers: {
          'Content-Type': 'application/json',
        },
        bio: bio,
        uid: currentUser.uid
      }).then((res) => {
        console.log(res.data);
        setVisible(false);
      })
      
    }


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
            onChange={(e) => setBio(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto css={{ color: '#ffffff', backgroundColor: '#78716c' }} onClick={saveBio}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Bio
