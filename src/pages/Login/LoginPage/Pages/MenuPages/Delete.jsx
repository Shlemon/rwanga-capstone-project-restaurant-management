import './Add.css';
import { Row, Col } from 'react-bootstrap';

import React from 'react';
import { EditMenuCategory, EditMenuContent, EditMenuItem } from '../../../../../components/firestore-ops/MainQueries';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import DynamicSelect from '../../../../../components/forms/FormikForms/DynamicSelect';
import DynamicItemSelect from '../../../../../components/forms/FormikForms/DynamicItemSelect';
import ColumnStructure from '../../../../../components/forms/FormikForms/ColumnStructure';
import DataHive from '../DataHive';


export default function MenuDelete() {
    // This code can be minimized big time
    // by using custom field.
    // ...ill just do this shit later
    const hive = new DataHive();

    return(
        <React.Fragment>
            <h1 className='mt-3' id='header-break' style={{fontSize: '30px'}}>Delete Item</h1>
            <Formik 
                initialValues={{
                    createItemIn: '',
                    contentType: '',
                    itemName: '',
                }}
                validationSchema={Yup.object({
                    createItemIn: Yup.string().required('Required'),
                    contentType: Yup.string().required('Required'),
                    itemName: Yup.string().required('Required'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    EditMenuItem({mode: 'delete', ...values})
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit} className='my-5'>
                        <ColumnStructure cdata={{
                            name: 'createItemIn',
                            title: 'Select Category',
                            injection: (
                                <Field as='select' name='createItemIn' id='field-width'>
                                    <option/>
                                    {hive.getHeaderTitle().map((title)=> {
                                        return <option value={title}>{title}</option>
                                    })}
                                </Field>
                            )
                        }}/>
                        <ColumnStructure cdata={{
                            name: 'contentType',
                            title: 'Content Type',
                            injection: (<DynamicSelect children={hive.getContentTitles()} name='contentType' id='field-width'/>)
                        }}/>
                        <ColumnStructure cdata={{
                            name: 'itemName',
                            title: 'Item name',
                            injection: (<DynamicItemSelect children={hive.getContentBody()} name='itemName' id='field-width'/>)
                        }}/>
                        <Row><Col md={12} className='d-flex justify-content-center'><button type='submit' className='btn-42'>Save Changes</button></Col></Row>
                    </Form>
                )}
            </Formik>
            <hr/>
            <h1 className='mt-3 mb-5' id='header-break' style={{fontSize: '30px'}}>Delete <br/>Category</h1>
            <Formik
                initialValues={{
                    selectedCategory: '',
                }}
                validationSchema={Yup.object({
                    selectedCategory: Yup.string().required('Required'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    EditMenuCategory({mode: 'delete', ...values});
                    alert(`Deleted ${values.selectedCategory}`);
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit} className='my-5'>
                        <ColumnStructure cdata={{
                            name: 'selectedCategory',
                            title: 'Select Category',
                            injection: (
                                <Field as='select' name='selectedCategory' id='field-width'>
                                    <option/>
                                    {hive.getHeaderTitle().map((title) => {
                                        return <option value={title}>{title}</option>
                                    })}
                                </Field>
                            )
                        }}/>
                        <Row><Col md={12} className='d-flex justify-content-center'><button type='submit' className='btn-42'>Save Changes</button></Col></Row>
                </Form>
                )}
            </Formik>
            <hr/>
            <h1 className='mt-3 mb-5' id='header-break' style={{fontSize: '30px'}}>Delete Content Type</h1>
            <Formik 
                initialValues={{
                    createItemIn: '',
                    contentType: '',
                }}
                validationSchema={Yup.object({
                    createItemIn: Yup.string().required('Required'),
                    contentType: Yup.string().required('Required'),
                })}
                onSubmit={(values, {setSubmitting}) => {
                    EditMenuContent({mode: 'delete', ...values})
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {formik => (
                    <Form onSubmit={formik.handleSubmit} className='my-5'>
                        <ColumnStructure cdata={{
                            name: 'createItemIn',
                            title: 'Select Category',
                            injection: (
                            <Field as='select' name='createItemIn' id='field-width'>
                                <option/>
                                {hive.getHeaderTitle().map((title) => {
                                    return <option value={title}>{title}</option>
                                })}
                            </Field>)
                        }}/>
                        <ColumnStructure cdata={{
                            name: 'contentType',
                            title: 'Content Type',
                            injection: (<DynamicSelect children={hive.getContentTitles()} name='contentType' id='field-width'/>)
                        }}/>
                        <Row><Col md={12} className='d-flex justify-content-center'><button type='submit' className='btn-42'>Save Changes</button></Col></Row>
                    </Form>
                )}
            </Formik>
        </React.Fragment>
    );
}
