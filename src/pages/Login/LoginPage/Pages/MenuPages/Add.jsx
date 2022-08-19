import './Add.css';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { UpdateMenuAdd, UpdateCategoryAdd } from '../../../../../components/firestore-ops/MainQueries';
import { useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import DynamicSelect from '../../../../../components/forms/FormikForms/DynamicSelect';
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
                        <Row className='mb-3'>
                            <Col md={5} className='text-end' id='col-break'><label htmlFor='createItemIn'>Create item in</label></Col>
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
                            <Col md={5} className='text-end' id='col-break'><label htmlFor='isChecked'>Overwrite existing item</label></Col>
                            <Col md={5} className='text-start' id='col-break'><Field type='checkbox' name='isChecked'/></Col>
                            <Col md={2} id='col-break'><ErrorMessage name='isChecked'/></Col>
                        </Row>

                        <Row className='mb-3'>
                            <Col md={5} className='text-end' id='col-break'><label htmlFor='contentType'>Content Type</label></Col>
                            <Col md={5} className='text-start' id='col-break'>
                                <DynamicSelect children={hive.getContentTitles()} name='contentType' id='field-width'/>
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

// export function MenuPages4()
// {
//     const [menuSelect, setMenuSelect] = React.useState('Sides');

//     const menus = useSelector((state) => state.menuPages.routes);
//     const pages = useSelector((state) => state.menuPages.pages);

//     const HandleMenuChange = () => {

//     }

//     const handleFactoryReset = async() => {
//         await FactoryReset();
//     }

//     return(
//         <Container className='border border-2 my-5 px-5'>
//             <h2 className='text-start'>Configure Menus - Add item</h2>
//             <Form className='my-5'>
//                 <Form.Group as={Row} className='mb-3'>
//                     <Form.Label column md={2} className='text-start'>Create item in</Form.Label>
//                     <Col md={10}>
//                         <Form.Select aria-label="Default select example" onChange={(e) => setMenuSelect(e.target.value)}>
//                             {Object.entries(menus).map(
//                                 (menu_type) => {
//                                     return <option value={menu_type[1].title}>{menu_type[1].title}</option>
//                                 }
//                             )}
//                         </Form.Select>
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} className='justify-content-center mb-3'>
//                     <Form.Label column md={2} className='text-start'>Overwrite existing item</Form.Label>
//                     <Col md={10} className='d-flex justify-content-start align-content-center align-items-center'>
//                         <Form.Check aria-label="option 1" />
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} className='mb-3'>
//                     <Form.Label column md={2} className='text-start'>Content type</Form.Label>
//                     <Col md={10}>
//                         <Form.Select aria-label="Default select example">
//                             {Object.entries(pages).map(
//                                 (key) => {
//                                     if(key[0] === menuSelect){
//                                         key[1].pageContent.map(
//                                             (contents) => {
//                                                 return <option value={contents}>{contents.name}</option>
//                                             }
//                                         )
//                                     }
//                                 }
//                             )}
//                         </Form.Select>
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} className='mb-3'>
//                     <Form.Label column md={2} className='text-start'>Item Name</Form.Label>
//                     <Col md={10}>
//                         <Form.Control as='textarea' placeholder='i.e. Cheese Burger' rows={1} />
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} className='mb-3'>
//                     <Form.Label column md={2} className='text-start'>Item Description</Form.Label>
//                     <Col md={10}>
//                         <Form.Control as='textarea' placeholder='Meat, lettuce, cheese...' rows={2} />
//                     </Col>
//                 </Form.Group>

//                 <Form.Group as={Row} className='mb-3'>
//                     <Col md={12}>
//                     <Button onClick={handleFactoryReset} disabled>Save Changes</Button>
//                     </Col>
//                 </Form.Group>

//             </Form>
//             <MenuPages2 />
//         </Container>
//     );
// }