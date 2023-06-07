import { useState, useEffect } from "react";
import validatorsInfo from "./validator";

const useForm = (validatorsInfo) => {
    const [values, setValues] = useState({
        billFromAddress : '',
        fromCity : '',
        fromPostCode : '',
        fromCountry : '',
        clientName : '',
        clientEmail : '',
        clientStreetAddress : '',
        toCity : '',
        toPostCode : '',
        toCountry : '',
        invoiceDate : '',
        paymentTerms : '',
        projectDescription : '',
        itemName : '',
        itemCity : '',
        itemPrice : '',
        totalItem : ''
    });

    const[errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validatorsInfo(values));
        setIsSubmitting(true);
    }
    
    return {handleChange, values, handleSubmit, errors};
}

export default useForm;