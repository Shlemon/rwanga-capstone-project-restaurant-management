import React from "react";
import { useFormikContext, Field, useField, setFieldValue } from "formik";

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
    }, [createItemIn, touched.createItemIn, setFieldValue, props.name]);

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

export default DynamicSelect;