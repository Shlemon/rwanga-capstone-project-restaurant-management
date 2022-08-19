import '../MenuPages/Add.css';

import { Row, Col, Modal, Button } from 'react-bootstrap';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FactoryReset } from '../../../../../components/firestore-ops/MainQueries';


const initialValues = {
    isChecked: false,
};
const validationSchema = Yup.object({
    isChecked: Yup.bool().required('Required'),
});


const ConfirmationModal = (props) => {
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

export default function MenuSettings() {
    const [showModal, setShowModal] = React.useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleConfirm = () => {
        alert('RESETING...(Not Implemented Yet)'); 
        setShowModal(false);
    }

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting}) => {
                // alert(JSON.stringify(values, null, 2));
                handleShow();
            }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit} className='my-5'>
                        <Row className='mb-3'>
                            <Col md={7} className='text-end' id='col-break'><label htmlFor='isChecked'>Factory Reset Menu Settings</label></Col>
                            <Col md={3} className='text-start' id='col-break'><Field type='checkbox' name='isChecked'/></Col>
                            <Col md={2} id='col-break'><ErrorMessage name='isChecked'/></Col>
                        </Row>
                        <ConfirmationModal p={{
                            show: showModal,
                            handleClose: handleClose,
                            handleConfirm: handleConfirm,
                        }}/>
                        <button type='submit' className='bg-danger text-white'>Reset</button>
                    </Form>
                )}
        </Formik>
    )
}