import React from 'react'
import {
  Modal,
  Button,
} from 'react-bootstrap'

const PromptModal = ({
  showPromptModal,
  onClickYes,
  onClickNo,
  content
}) => {
  return (
    <Modal
      show={ showPromptModal }>      
      <Modal.Header>Confirmation modal</Modal.Header>      
      <Modal.Body>
        { content }
      </Modal.Body>
      <Modal.Footer>
        <Button 
          color="primary"
          onClick={ onClickYes }>Ok</Button>        
      </Modal.Footer>
    </Modal>
  )
}

export default PromptModal