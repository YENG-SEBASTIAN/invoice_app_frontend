import React from 'react'
import './mainbody.css'
import { icons } from '../../icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NewInvoice from '../modals/newInvoice/NewInvoice';

const MainBody = () => {

  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("data.json")
      .then(response => response.data)
      .then(json => setData(json))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  })

  const getViewDetails = (id) => {
    axios.get('data.json')
    .then(response => {
      const foundObject = response.data.find(obj => obj.id === id);
      navigate('viewInvoice/'+`${id}`, {state:{
        details:foundObject
    }})
    })
    .catch(error => {
      console.error(error);
    });
}

  const submitForm = () => {
    setIsSubmitted(true);
  }

  const toggleModal = () => {
    const newModalBody = document.getElementById('newModalBody');
    setOpenModal(false)
    newModalBody.style.display = 'block';
  }

  return (
    <>
      <div className="mainbody">
        <div className="container">
          {
            openModal && <NewInvoice submitForm={submitForm} closeModal={toggleModal} />
          }
          <div className="header">
            <div className="left">
              <h2>Invoice</h2>
              <p>There are {data.length} invoices</p>
            </div>
            <div className="right">
              <div className="filter">
                <p>Filter by status <img src={icons.arrowDown} alt="" /></p>
              </div>
              <div className="newInvoice">
                <button
                  onClick={() => setOpenModal(true)}
                >
                  <img src={icons.plus} alt="" /> New Invoice
                </button>
              </div>
            </div>
          </div>

          <div className="content">

            {
              data.length > 0 ? data.map(item => {
                return (
                  <>
                    <div className="card"
                      onClick={()=> getViewDetails(item.id)}
                    >
                      <h4>#{item.id}</h4>
                      <p>{item.paymentDue}</p>
                      <p>{item.clientName}</p>
                      <h5>£ {item.total}</h5>

                      {
                        item.status === 'paid' ?
                          <>
                            <div className='status status-paid'>
                              <div className='dot-paid'></div>
                              <p>{item.status}</p>
                            </div>
                          </>
                          : item.status === 'pending' ?
                            <>
                              <div className='status status-pending'>
                                <div className='dot-pending'></div>
                                <p>{item.status}</p>
                              </div>
                            </>
                            :
                            <>
                              <div className='status status-draft'>
                                <div className='dot-draft'></div>
                                <p>{item.status}</p>
                              </div>
                            </>
                      }


                      <button className='card-btn'>
                        <img src={icons.arrowRight} />
                      </button>
                    </div>
                  </>
                )
              }) :
                <>
                  <div className='empt-data'>
                    <img src={icons.empty} />
                  </div>
                </>
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default MainBody