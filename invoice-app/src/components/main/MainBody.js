import React from 'react'
import './mainbody.css'
import { icons } from '../../icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import NewInvoice from '../modals/newInvoice/NewInvoice';
import IconArrowDown from "../../assets/icon-arrow-down.svg";
import IconCheck from "../../assets/icon-check.svg";
import baseURL from '../validators/useForm'
const MainBody = () => {

  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = React.useState(false);

  const [selectedOption, setSelectedOption] = React.useState("");

  // const handleOptionChange = async (event) => {
  // setSelectedOption(event.target.value);
  // const filteredInvoice = await filterInvoiceByStatus(event.target.value);
  // setInvoices(filteredInvoice.invoice);
  // };

  const handleOptionChange = async (event) => {
    setSelectedOption(event.target.value);
    await axios
      .post('http://localhost:8000/invoice/filter-invoice/', selectedOption)
      .then((response) => {
        console.log(response.status);
        window.location.href = "/"
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data); // => the response payload 
        }
      });
      console.log(selectedOption)
  };


  useEffect(() => {
    axios
      .get('http://localhost:8000/invoice/invoice-list/')
      .then(response => response.data)
      .then(json => setData(json))
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [])



  const getViewDetails = (id) => {
    axios.get('http://localhost:8000/invoice/invoice-list/')
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
              <span className="invoice-filter">
                <div className="dropdown-container">
                  <div
                    className="dropdown-trigger"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    <span className="filter-text">
                      Filter <span className="by-status">by status</span>
                    </span>
                    <img
                      src={IconArrowDown}
                      alt="icon-arrow-down"
                    />
                  </div>
                  {isOpen && (
                    <div className="dropdown-options">
                      <label className="radio-label">
                        <input
                          type="radio"
                          value="Draft"
                          checked={selectedOption === "Draft"}
                          onChange={handleOptionChange}
                        />
                        <span className="radio-custom">
                          {selectedOption === "Draft" && (
                            <img src={IconCheck} alt="icon-check" />
                          )}
                        </span>
                        Draft
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          value="Pending"
                          checked={selectedOption === "Pending"}
                          onChange={handleOptionChange}
                        />
                        <span className="radio-custom">
                          {selectedOption === "Pending" && (
                            <img src={IconCheck} alt="icon-check" />
                          )}
                        </span>
                        Pending
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          value="Paid"
                          checked={selectedOption === "Paid"}
                          onChange={handleOptionChange}
                        />
                        <span className="radio-custom">
                          {selectedOption === "Paid" && (
                            <img src={IconCheck} alt="icon-check" />
                          )}
                        </span>
                        Paid
                      </label>
                    </div>
                  )}
                </div>
              </span>
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
                      onClick={() => getViewDetails(item.id)}
                    >
                      <h4>#{item.id}</h4>
                      <p>{item.invoiceDate}</p>
                      <p>{item.clientName}</p>
                      <h5>£ {item.items.total}</h5>

                      {
                        item.invoiceStatus === 'paid' ?
                          <>
                            <div className='status status-paid'>
                              <div className='dot-paid'></div>
                              <p>{item.invoiceStatus}</p>
                            </div>
                          </>
                          : item.invoiceStatus === 'pending' ?
                            <>
                              <div className='status status-pending'>
                                <div className='dot-pending'></div>
                                <p>{item.invoiceStatus}</p>
                              </div>
                            </>
                            :
                            <>
                              <div className='status status-draft'>
                                <div className='dot-draft'></div>
                                <p>{item.invoiceStatus}</p>
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