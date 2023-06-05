import React, { useState, useEffect } from 'react'
import './carddetails.css'
import { Link, useLocation } from 'react-router-dom';
import { icons } from '../../icons';
import EditInvoice from '../modals/editModal/EditInvoice';
import DeleteInvoice from '../modals/deleteModal/DeleteInvoice';

const CardDetails = () => {
    const location = useLocation();
    const [item, setItem] = useState([])
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    useEffect(() => {
        setItem(location.state.details.items);
    })

    const toggleModal = () => {
        const newModalBody = document.getElementById('newModalBody');
        setOpenEditModal(false)
        newModalBody.style.display = 'block';
    }
    const toggleDeleteModal = () => {
        const deleteModalBody = document.getElementById('deleteModalBody');
        setOpenDeleteModal(false)
        deleteModalBody.style.display = 'block';
    }
  return (
    <>

            <div className="viewcard-container">
                <div className="back-btn">
                    <Link to='/' className='goBack'>
                        <img src={icons.arrowLeft} alt="" />
                        Go back
                    </Link>
                </div>
                <div className="viewcard-header">
                    <div className="card-status">
                        <h4>Status</h4>


                        {
                            location.state.details.status === 'paid' ?
                                <>
                                    <div className='status status-paid'>
                                        <div className='dot-paid'></div>
                                        <p>{location.state.details.status}</p>
                                    </div>
                                </>
                                : location.state.details.status === 'pending' ?
                                    <>
                                        <div className='status status-pending'>
                                            <div className='dot-pending'></div>
                                            <p>{location.state.details.status}</p>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='status status-draft'>
                                            <div className='dot-draft'></div>
                                            <p>{location.state.details.status}</p>
                                        </div>
                                    </>
                        }


                    </div>
                    <div className="viewcard-btns">
                        <div className="edit-btn">
                            <button className='edit'
                                onClick={
                                    () => setOpenEditModal(true)
                                }
                            >Edit</button>
                        </div>
                        <div className="delete-btn">
                            <button className='delete'
                                onClick={
                                    () => setOpenDeleteModal(true)
                                }
                            >Delete</button>
                        </div>
                        <div className="markAsPaid-btn">
                            <button className='saveAsPaid'>Mark as paid</button>
                        </div>
                    </div>
                </div>
                <div className="viewcard-body">
                    {
                        openEditModal && <EditInvoice editID={location.state.details.id} closeModal={toggleModal} />
                    }
                    {
                        openDeleteModal && <DeleteInvoice invoiceID={location.state.details.id} closeModal={toggleDeleteModal} />
                    }
                    <div className="card-address">
                        <div className="card-id">
                            <h4>#{location.state.details.id}</h4>
                            <p>{location.state.details.description}</p>
                        </div>
                        <div className="card-mainAdderss">
                            <p>{location.state.details.clientAddress.street}</p>
                            <h3>{location.state.details.clientAddress.city}</h3>
                            <p>{location.state.details.clientAddress.postCode}</p>
                            <p>{location.state.details.clientAddress.country}</p>
                        </div>
                    </div>

                    <div className="invoice-details">
                        <div className="invoice-info">
                            <div className="invoice-date">
                                <div className="date">
                                    <p>invoice date</p>
                                    <h4>{location.state.details.createdAt}</h4>
                                </div>
                                <div className="payment-date">
                                    <p>Payment Due</p>
                                    <h4>{location.state.details.paymentDue}</h4>
                                </div>
                            </div>

                            <div className="billTo">
                                <p>Bill to</p><br />
                                <h4>{location.state.details.clientName}</h4>
                                <p>{location.state.details.clientAddress.street}</p>
                                <p>{location.state.details.clientAddress.city}</p>
                                <p>{location.state.details.clientAddress.postCode}</p>
                                <p>{location.state.details.clientAddress.country}</p>
                            </div>
                        </div>

                        <div className="sendTo">
                            <p>Sent to</p>
                            <h4>{location.state.details.clientEmail}</h4>
                        </div>
                    </div>

                    <div className="viewcard-checkout">
                        <div className="content">
                            <div className="list-item">

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Item Name</th>
                                            <th>QTY</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            item.map(items => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>{items.name}</td>
                                                            <td>{items.quantity}</td>
                                                            <td>£ {items.price}</td>
                                                            <td>£ {items.total}</td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div className="amountDue">
                                <h5>AmountDue</h5>
                                <h2>£ {location.state.details.total}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
  )
}

export default CardDetails