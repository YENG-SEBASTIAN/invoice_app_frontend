import { useState, useEffect } from "react";
import axios from 'axios';
import validatorsInfo from "./validator";


export const baseURL = 'http://localhost:8000/invoice/';

const useForm = (validatorsInfo) => {
    const [values, setValues] = useState({
        billFromAddress: '',
        fromCity: '',
        fromPostCode: '',
        fromCountry: '',
        clientName: '',
        clientEmail: '',
        clientStreetAddress: '',
        toCity: '',
        toPostCode: '',
        toCountry: '',
        invoiceDate: '',
        paymentTerms: '',
        projectDescription: '',
        items: ''
        // itemQty: '',
        // itemPrice: '',
        // totalItem: ''
    });

    const [errors, setErrors] = useState({});
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setErrors(validatorsInfo(values));
    // }
    


return { handleChange, values, errors, setErrors};
}

export default useForm;
