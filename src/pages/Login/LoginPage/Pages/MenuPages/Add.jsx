import './Add.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage, useField, useFormikContext } from 'formik';
import * as Yup from 'yup';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { FactoryReset, UpdateMenuAdd } from '../../../../../components/firestore-ops/MainQueries';


function ExtractData(itemArray) {
    const titles = [];
    const contentTitle = [];
    
    Object.entries(itemArray).map((item) => {
        // This is the title
        titles.push(item[0])
        // This is the pageContent to be iterated
        item[1].pageContent.map((content) => {
            item[0] in contentTitle ? contentTitle[item[0]].push(content.name) : contentTitle[item[0]] = [content.name]
        })
    })
    return [titles, contentTitle];
}

const DynamicSelect = ({children, ...props}) => {
    const [titlesData, setData] = React.useState([]);
    const {
        values: {createItemIn},
        touched,
        setFieldValue,
    } = useFormikContext();
    const field = useField(props);

    React.useEffect(() => {
        // First, reset the data storage
        setData([]);

        Object.entries(children).map((child) => {
            if(child[0] === createItemIn){
                child[1].forEach((itemName) => {
                    setData(prevData => [...prevData, itemName]);
                })
            }
        })
    }, [createItemIn, touched.createItemIn, touched.createItemIn, setFieldValue, props.name]);

    return(
        <React.Fragment>
            <Field as='select' {...props} {...field}>
                <option/>
                {titlesData.map((menuName) => {
                    return <option value={menuName}>{menuName}</option>
                })}
            </Field>
        </React.Fragment>
    )
}


const initialValues = {
    createItemIn: '',
    contentType: '',
    isChecked: false,
    itemName: '',
    itemDescription: '',
};

const validationSchema = Yup.object({
    createItemIn: Yup.string().required('Required'),
    contentType: Yup.string().required('Required'),
    isChecked: Yup.bool().required('Required'),
    itemName: Yup.string().required('Required'),
    itemDescription: Yup.string().required('Required'),
})

export default function MenuAdd() {
    // This code can be minimized big time
    // by using custom field.
    // ...ill just do this shit later
    const pages = useSelector((state) => state.menuPages.pages);
    const [itemTitles, contentTitles] = ExtractData(pages);

    const handleFactoryReset = () => {
        // FactoryReset();
    }

    return(
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
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
                                {itemTitles.map((title) => {
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
                            <DynamicSelect children={contentTitles} name='contentType' id='field-width'/>
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