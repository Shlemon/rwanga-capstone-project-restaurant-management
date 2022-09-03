import { ErrorMessage } from 'formik';
import { Row, Col } from 'react-bootstrap';

const ContactColumn = (props) => {
    return(
        <Row className='mb-3'>
            <Col md={12} className='text-center'>{props.cdata.injection}</Col>
            <Col md={12} className='text-center'>
                <ErrorMessage name={props.cdata.name}>
                    {msg => <div className='text-danger fw-bold'>{msg}</div>}
                </ErrorMessage>
            </Col>
        </Row>
    );
}

export default ContactColumn;