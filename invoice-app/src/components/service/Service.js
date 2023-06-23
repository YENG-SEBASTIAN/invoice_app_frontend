import axios from "axios";
import {useNavigate } from 'react-router-dom';


export const baseURL = 'http://localhost:8000/invoice/';
// export const baseURL = 'YengSebastian1.pythonanywhere.com/invoice/'

export const GetViewDetails = (id) => {
    const navigate = useNavigate()

    axios.get(baseURL + `invoice-list/`)
      .then(response => {
        const foundObject = response.data.find(obj => obj.id === id);
        navigate(`viewInvoice/${id}/`, {
          state: {
            details: foundObject
          }
        })
      })
      .catch(error => {
        console.error(error);
      });
  }


    // let item, qauntity, price, total
    // for (let i = 0; i < inputList.length; i++) {
    //     Object.keys(inputList).forEach(key => {
    //         item = inputList[key].itemName;
    //         qauntity = inputList[key].itemQty;
    //         price = inputList[key].itemPrice;
    //         total = inputList[key].itemQty * inputList[key].itemPric;
    //     })
    // }