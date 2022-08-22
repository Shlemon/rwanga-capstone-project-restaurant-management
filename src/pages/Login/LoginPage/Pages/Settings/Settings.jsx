import '../MenuPages/Add.css';
import React from 'react';

import { Row, Col, Modal, Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// import { FactoryReset } from '../../../../../components/firestore-ops/MainQueries';
import ColumnStructure from '../../../../../components/forms/FormikForms/ColumnStructure';


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
        alert('RESETING...(Disabled)'); 
        setShowModal(false);
    }

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting}) => {
                // alert(JSON.stringify(values, null, 2));
                if(values.isChecked){
                    handleShow();
                }
            }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit} className='my-5'>
                        <ColumnStructure cdata={{
                            name: 'isChecked',
                            title: 'Factory Reset Menu Settings',
                            injection: (<Field type='checkbox' name='isChecked' id='field-width'/>)
                        }}/>
                        <ConfirmationModal p={{
                            show: showModal,
                            handleClose: handleClose,
                            handleConfirm: handleConfirm,
                        }}/>
                        <Row><Col md={12} className='d-flex justify-content-center'><button type='submit' className='btn-42'>Save Changes</button></Col></Row>
                    </Form>
                )}
        </Formik>
    )
}