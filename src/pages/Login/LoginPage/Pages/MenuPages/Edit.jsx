import './Add.css';
import { Row, Col } from 'react-bootstrap';

import React from 'react';
import { UpdateMenuAdd, UpdateCategoryAdd } from '../../../../../components/firestore-ops/MainQueries';

import { Formik, Field, Form, ErrorMessage, useField, useFormikContext} from 'formik';
import * as Yup from 'yup';
import DynamicSelect from '../../../../../components/forms/FormikForms/DynamicSelect';
import DynamicItemSelect from '../../../../../components/forms/FormikForms/DynamicItemSelect';
import DataHive from '../DataHive';


export default function MenuEdit() {
    // This code can be minimized big time
    // by using custom field.
    // ...ill just do this shit later
    const hive = new DataHive();

    return(
        <React.Fragment>
            <h1 className='mt-3' id='header-break' style={{fontSize: '30px'}}>Edit Item</h1>
            <Formik 
                initialValues={{
                    createItemIn: '',
                    contentType: '',
                    itemName: '',
                    itemDescription: '',
                }}
                validationSchema={Yup.object({
                    createItemIn: Yup.string().required('Required'),
                    contentType: Yup.string().required('Required'),
                    itemName: Yup.string().required('Required'),
                    itemDescription: Yup.string().required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log('Data ', values);
                        alert(JSON.stringify(values, null, 2));
                        UpdateMenuAdd(values);
                        setSubmitting(false);
                    }, 400)
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit} className='my-5'>
                        <Row className='mb-3'>
                            <Col md={5} className='text-end' id='col-break'><label htmlFor='createItemIn'>Item Category</label></Col>
                            <Col md={5} className='text-start' id='col-break'>
                                <Field as='select' name='createItemIn' id='field-width'>
                                    <option/>
                                    {hive.getHeaderTitle().map((title) => {
                                        return <option value={title}>{title}</option>
                                    })}
                                </Field>
                            </Col>
                            <Col md={2} id='col-break'><ErrorMessage name='createItemIn'/></Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col md={5} className='text-end' id='col-break'><label htmlFor='contentType'>Content Type</label></Col>
                            <Col md={5} className='text-start' id='col-break'>
                                <DynamicSelect children={hive.getContentTitles()} name='contentType' id='field-width'/>
                                </Col>
                            <Col md={2} id='col-break'><ErrorMessage name='contentType'/></Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col md={5} className='text-end' id='col-break'><label htmlFor='itemName'>Item Name</label></Col>
                            <Col md={5} className='text-start' id='col-break'>
                                <DynamicItemSelect children={hive.getContentBody()} name='itemName' id='field-width'/>
                                </Col>
                            <Col md={2} id='col-break'><ErrorMessage name='itemName'/></Col>
                        </Row>
                        
                        <button type='submit'>Save Changes</button>
                    </Form>
                )}
            </Formik>
            <hr/>
            <h1 className='mt-3 mb-5' id='header-break' style={{fontSize: '30px'}}>Edit Category</h1>
            <Formik
                initialValues={{
                    newCategory: '',
                    contentType: '',
                    itemName: '',
                    itemDescription: '',
                }}
                validationSchema={Yup.object({
                    newCategory: Yup.string().required('Required'),
                    contentType: Yup.string().required('Required'),
                    itemName: Yup.string().required('Required'),
                    itemDescription: Yup.string().required('Required'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    alert(JSON.stringify(values, null, 2));
                    UpdateCategoryAdd(values);
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit} className='my-5'>
                    <Row className='mb-3'>
                        <Col md={5} className='text-end' id='col-break'><label htmlFor='newCategory'>New Category</label></Col>
                        <Col md={5} className='text-start' id='col-break'>
                            <Field as='input' name='newCategory' id='field-width'/>
                        </Col>
                        <Col md={2} id='col-break'><ErrorMessage name='newCategory'/></Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col md={5} className='text-end' id='col-break'><label htmlFor='contentType'>Content Type</label></Col>
                        <Col md={5} className='text-start' id='col-break'>
                            <Field name='contentType' id='field-width' as='input' placeholder='For The Hands...'/>
                            </Col>
                        <Col md={2} id='col-break'><ErrorMessage name='contentType'/></Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col md={5} className='text-end' id='col-break'><label htmlFor='itemName'>Item name</label></Col>
                        <Col md={5} className='text-start' id='col-break'><Field as='textarea' name='itemName' id='field-width'/></Col>
                        <Col md={2} id='col-break'><ErrorMessage name='itemName'/></Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col md={5} className='text-end' id='col-break'><label htmlFor='itemDescription'>Item Description</label></Col>
                        <Col md={5} className='text-start' id='col-break'><Field as='textarea' name='itemDescription' id='field-width'/></Col>
                        <Col md={2} id='col-break'><ErrorMessage name='itemDescription'/></Col>
                    </Row>
                    <button type='submit'>Save Changes</button>
                </Form>
                )}
            </Formik>
        </React.Fragment>
    );
}
