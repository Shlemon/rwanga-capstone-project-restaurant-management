import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({runFunction, ...props}) => {
    const handleConfirm = () => {
        // Run the passed function
        alert('Running passed function');
    };
    return(
        <Modal show={props.p.show} onHide={props.p.handleClose} backdrop='static' keyboard={false}>
            <Modal.Header>
                <Modal.Title>CONFIRM RESET</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to reset all menu items to default? This action can't be reversed.
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.p.handleClose}>Cancel</Button>
                <Button variant='danger' onClick={props.p.handleConfirm}>Reset</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;