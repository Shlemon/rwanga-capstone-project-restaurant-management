import './Add.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { UpdateMenuAdd, UpdateCategoryAdd } from '../../../../../components/firestore-ops/MainQueries';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import DynamicSelect from '../../../../../components/forms/FormikForms/DynamicSelect';
import ColumnStructure from '../../../../../components/forms/FormikForms/ColumnStructure';
import DataHive from '../DataHive';


export default function MenuAdd() {
    // This code can be minimized big time
    // by using custom field.
    // ...ill just do this shit later
    const hive = new DataHive();

    return(
        <React.Fragment>
            <h1 className='mt-3' id='header-break' style={{fontSize: '30px'}}>Add New <br/>Item</h1>
            <Formik 
                initialValues={{
                    createItemIn: '',
                    contentType: '',
                    isChecked: false,
                    itemName: '',
                    itemDescription: '',
                }}
                validationSchema={Yup.object({
                    createItemIn: Yup.string().required('Required'),
                    contentType: Yup.string().required('Required'),
                    isChecked: Yup.bool().required('Required'),
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
                        <ColumnStructure cdata={{
                            name: 'createItemIn',
                            title: 'Create item in',
                            injection: (
                                <Field as='select' name='createItemIn' id='field-width'>
                                    <option/>
                                    {hive.getHeaderTitle().map((title) => {
                                        return <option value={title}>{title}</option>
                                    })}
                                </Field>
                            )
                        }}/>
                        <ColumnStructure cdata={{
                            name: 'isChecked', 
                            title: 'Overwrite existing item',
                            injection: (<Field type='checkbox' name='isChecked'/>)
                            }}/>
                        <ColumnStructure cdata={{
                            name: 'contentType',
                            title: 'Content Type',
                            injection: (<DynamicSelect children={hive.getContentTitles()} name='contentType' id='field-width'/>)
                        }}/>
                        <ColumnStructure cdata={{name: 'itemName', 
                                                title: 'Item name',
                                                injection: (<Field as='textarea' name='itemName' id='field-width'/>)}}/>
                        <ColumnStructure cdata={{
                            name: 'itemDescription',
                            title: 'Item Description',
                            injection: (<Field as='textarea' name='itemDescription' id='field-width'/>)
                        }}/>
                        <Row><Col md={12} className='d-flex justify-content-center'><button type='submit' className='btn-42'>Save Changes</button></Col></Row>
                    </Form>
                )}
            </Formik>
            <hr/>
            <h1 className='mt-3 mb-5' id='header-break' style={{fontSize: '30px'}}>Add New <br/>Category</h1>
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
                        <ColumnStructure cdata={{
                            name: 'newCategory',
                            title: 'New Category',
                            injection: (<Field as='input' name='newCategory' id='field-width'/>)
                        }}/>
                        <ColumnStructure cdata={{
                            name: 'contentType',
                            title: 'Content Type',
                            injection: (<Field name='contentType' id='field-width' as='input' placeholder='For The  Hands...'/>)
                        }}/>
                        <ColumnStructure cdata={{
                            name: 'itemName',
                            title: 'Item name',
                            injection: (<Field as='textarea' name='itemName' id='field-width'/>)
                        }}/>
                        <ColumnStructure cdata={{
                            name: 'itemDescription',
                            title: 'Item Description',
                            injection: (<Field as='textarea' name='itemDescription' id='field-width'/>)
                        }}/>
                        <Row><Col md={12} className='d-flex justify-content-center'><button type='submit' className='btn-42'>Save Changes</button></Col></Row>
                </Form>
                )}
            </Formik>
        </React.Fragment>
    );
}