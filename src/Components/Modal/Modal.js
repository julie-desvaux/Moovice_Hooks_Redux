import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Config from '../../Config'

export default function ModalComponent(props) {

    const { movieDetails, trailer } = props
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                See the trailer
            </Button>
    
            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{movieDetails.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="750" height="420" src={`${Config.TRAILER_ROOT}${trailer.key}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
            </Modal>
      </>
    )
}
