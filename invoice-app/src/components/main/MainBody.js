import React from 'react'
import './mainbody.css'
import { icons } from '../../icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const MainBody = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get("data.json")
      .then(response => response.data)
      .then(json => setData(json))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  })



  return (
    <>
      <div className="mainbody">
        <div className="container">
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
                <button>
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
                    <div className="card">
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