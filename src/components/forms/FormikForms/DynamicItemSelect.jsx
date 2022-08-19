import React from "react";
import { useField, useFormikContext, Field } from "formik";


const DynamicItemSelect = ({children, ...props}) => {
    const [titlesData, setData] = React.useState([]);
    const {
        values: {createItemIn, contentType},
        touched,
        setFieldValue,
    } = useFormikContext();
    const field = useField(props);

    React.useEffect(() => {
        // First, reset the data storage
        setData([]);

        console.log('iteration array, ', children);
        Object.entries(children).map((child) => {
            if(child[0] === createItemIn){
                Object.entries(child[1]).forEach(
                    (array) => {
                        console.log('Content type ', contentType);
                        if(array[0] === contentType){
                            console.log('Inside')
                            array[1].forEach(
                                (itemEntry) => {
                                    setData(prevData => [...prevData, itemEntry]);
                                }
                            )
                        }

                })
            }
        })
    }, [createItemIn, contentType, touched.contentType, touched.createItemIn, setFieldValue, props.name]);

    return(
        <React.Fragment>
            <Field as='select' {...props} {...field}>
                <option/>
                {titlesData.map((menuItem) => {
                    return <option value={menuItem.name}>{menuItem.name}</option>
                })}
            </Field>
        </React.Fragment>
    )
}

export default DynamicItemSelect;