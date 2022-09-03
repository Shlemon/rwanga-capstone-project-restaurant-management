import { Row, Col } from 'react-bootstrap';
import { ErrorMessage } from 'formik';

const ColumnStructure = (props) => {
    return(
        <Row className='mb-3'>
            <Col md={5} className='text-end' id='col-break'><label htmlFor={props.cdata.name}>{props.cdata.title}</label></Col>
            <Col md={5} className='text-start' id='col-break'>{props.cdata.injection}</Col>
            <Col md={2} id='col-break'>
                <ErrorMessage name={props.cdata.name}>
                    {msg => <div className='text-danger fw-bold'>{msg}</div>}
                </ErrorMessage>
                </Col>
        </Row>
    );
}

export default ColumnStructure;