import React, { useState } from 'react'
import './carddetails.css'
import { Link, useLocation, useParams } from 'react-router-dom';
import { icons } from '../../icons';
import EditInvoice from '../modals/editModal/EditInvoice';
import DeleteInvoice from '../modals/deleteModal/DeleteInvoice';
import axios from 'axios';

const CardDetails = () => {
    const location = useLocation();
    const param = useParams()
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);


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

    let item, qauntity, price, total
    Object.keys(location.state.details.items).forEach(key => {
        item = location.state.details.items[key].itemName;
        qauntity = location.state.details.items[key].itemQty;
        price = location.state.details.items[key].itemPrice;
        total = location.state.details.items[key].totalItem;
    })


    const handleMarkAsPaid = async (id) => {
        await axios.put(`http://localhost:8000/invoice/update-invoice/${id}/`)
        .then(res => res.status)
        .catch(err => console.log(err))
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
                            location.state.details.invoiceStatus === 'Paid' ?
                                <>
                                    <div className='status status-paid'>
                                        <div className='dot-paid'></div>
                                        <p>{location.state.details.invoiceStatus}</p>
                                    </div>
                                </>
                                : location.state.details.invoiceStatus === 'Pending' ?
                                    <>
                                        <div className='status status-pending'>
                                            <div className='dot-pending'></div>
                                            <p>{location.state.details.invoiceStatus}</p>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className='status status-draft'>
                                            <div className='dot-draft'></div>
                                            <p>{location.state.details.invoiceStatus}</p>
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
                            <button className='saveAsPaid'
                                onClick={() => handleMarkAsPaid(param.id)}
                            >
                                Mark as paid
                            </button>
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
                            <p>{location.state.details.projectDescription}</p>
                        </div>
                        <div className="card-mainAdderss">
                            <p>{location.state.details.billFromAddress}</p>
                            <h3>{location.state.details.fromCity}</h3>
                            <p>{location.state.details.fromPostCode}</p>
                            <p>{location.state.details.fromCountry}</p>
                        </div>
                    </div>

                    <div className="invoice-details">
                        <div className="invoice-info">
                            <div className="invoice-date">
                                <div className="date">
                                    <p>invoice date</p>
                                    <h4>{location.state.details.invoiceDate}</h4>
                                </div>
                                <div className="payment-date">
                                    <p>Payment Due</p>
                                    <h4>{location.state.details.invoiceDate}</h4>
                                </div>
                            </div>

                            <div className="billTo">
                                <p>Bill to</p><br />
                                <h4>{location.state.details.clientName}</h4>
                                <p>{location.state.details.clientStreetAddress}</p>
                                <p>{location.state.details.toCity}</p>
                                <p>{location.state.details.toPostCode}</p>
                                <p>{location.state.details.toCountry}</p>
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
                                            location.state.details.items ? <>
                                                <tr>
                                                    <td>{item}</td>
                                                    <td>{qauntity}</td>
                                                    <td>£ {price}</td>
                                                    <td>£ {total}</td>
                                                </tr>
                                            </> : ""
                                        }
                                    </tbody>
                                    {/* <tr>
                                        <td>{item.itemName}</td>
                                        <td>{item.itemQty}</td>
                                        <td>£ {item.itemPrice}</td>
                                        <td>£ {item.totalItem}</td>
                                    </tr> */}
                                </table>

                            </div>
                            <div className="amountDue">
                                <h5>AmountDue</h5>
                                <h2>£ {total}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardDetails