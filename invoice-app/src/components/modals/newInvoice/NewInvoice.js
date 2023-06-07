import React from 'react'
import './newinvoice.css'
import { icons } from '../../../icons'
import validatorsInfo from '../../validators/validator'
import useForm from '../../validators/useForm'
import { useState } from 'react'

const NewInvoice = ({ submitForm, closeModal }) => {
    const [isSubmited, setIsSubmitted] = useState(false);

    const { handleChange, values, handleSubmit, errors } = useForm(validatorsInfo, submitForm);

    const handleClose = (e) => {
        closeModal();
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }


    return (
        <>
            <div className="overlay" id='newModalOverlay'
                onClick={(e) => handleClose(e)}
            >
                <div className="modal-content" id='newModalBody' onClick={(e) => handleChildClick(e)}>
                    <div className="main-modal">
                        <form onSubmit={handleSubmit}>
                            <h4>New Invoice</h4>
                            <h5>Bill From</h5>
                            <div className="input-groups">
                                <label htmlFor="billFromAddress">Street Address</label>
                                <input
                                    type="text"
                                    name="billFromAddress"
                                    id="billFromAddress"
                                    value={values.billFromAddress}
                                    onChange={handleChange}
                                />
                                {errors.billFromAddress && <p className="danger error">{errors.billFromAddress}</p>}
                            </div>
                            <div className="input-groups">
                                <div className="input-combo">
                                    <div className="combo">
                                        <label htmlFor="fromCity">City</label>
                                        <input
                                            type="text"
                                            name="fromCity"
                                            id="fromCity"
                                            value={values.fromCity}
                                            onChange={handleChange}
                                        />
                                        {errors.fromCity && <p className="danger error">{errors.fromCity}</p>}
                                    </div>
                                    <div className="combo">
                                        <label htmlFor="fromPostCode">Post Code</label>
                                        <input
                                            type="text"
                                            name="fromPostCode"
                                            id="fromPostCode"
                                            value={values.fromPostCode}
                                            onChange={handleChange}
                                        />
                                        {errors.fromPostCode && <p className="danger error">{errors.fromPostCode}</p>}
                                    </div>
                                    <div className="combo">
                                        <label htmlFor="fromCountry">Country</label>
                                        <input
                                            type="text"
                                            name="fromCountry"
                                            id="fromCountry"
                                            value={values.fromCountry}
                                            onChange={handleChange}
                                        />
                                        {errors.fromPostCode && <p className="danger error">{errors.fromPostCode}</p>}
                                    </div>
                                </div>
                            </div>
                            <h5>Bill To</h5>
                            <div className="input-groups">
                                <label htmlFor="clientName">Client's Name</label>
                                <input
                                    type="text"
                                    name="clientName"
                                    id="clientName"
                                    value={values.clientName}
                                    onChange={handleChange}
                                />
                                {errors.clientName && <p className="danger error">{errors.clientName}</p>}
                            </div>
                            <div className="input-groups">
                                <label htmlFor="clientEmail">Client's Email</label>
                                <input
                                    type="email"
                                    name="clientEmail"
                                    id="clientEmail"
                                    value={values.clientEmail}
                                    onChange={handleChange}
                                />
                                {errors.clientEmail && <p className="danger error">{errors.clientEmail}</p>}
                            </div>
                            <div className="input-groups">
                                <label htmlFor="clientStreetAddress">Street Address</label>
                                <input
                                    type="text"
                                    name="clientStreetAddress"
                                    id="clientStreetAddress"
                                    value={values.clientStreetAddress}
                                    onChange={handleChange}
                                />
                                {errors.clientStreetAddress && <p className="danger error">{errors.clientStreetAddress}</p>}
                            </div>
                            <div className="input-groups">
                                <div className="input-combo">
                                    <div className="combo">
                                        <label htmlFor="toCity">City</label>
                                        <input
                                            type="text"
                                            name="toCity"
                                            id="toCity"
                                            value={values.toCity}
                                            onChange={handleChange}
                                        />
                                        {errors.toCity && <p className="danger error">{errors.toCity}</p>}
                                    </div>
                                    <div className="combo">
                                        <label htmlFor="toPostCode">Post Code</label>
                                        <input
                                            type="text"
                                            name="toPostCode"
                                            id="toPostCode"
                                            value={values.toPostCode}
                                            onChange={handleChange}
                                        />
                                        {errors.toPostCode && <p className="danger error">{errors.toPostCode}</p>}
                                    </div>
                                    <div className="combo">
                                        <label htmlFor="toCountry">Country</label>
                                        <input
                                            type="text"
                                            name="toCountry"
                                            id="toCountry"
                                            value={values.toCountry}
                                            onChange={handleChange}
                                        />
                                        {errors.toCountry && <p className="danger error">{errors.toCountry}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="input-groups">
                                <div className="input-combo">
                                    <div className="combo">
                                        <label htmlFor="invoiceDate">Invoice Date</label>
                                        <input
                                            type="date"
                                            name="invoiceDate"
                                            id="invoiceDate"
                                            value={values.invoiceDate}
                                            onChange={handleChange}
                                        />
                                        {errors.invoiceDate && <p className="danger error">{errors.invoiceDate}</p>}
                                    </div>
                                    <div className="combo">
                                        <label htmlFor="paymentTerms">Post Code</label>
                                        <select
                                            name="paymentTerms"
                                            id="paymentTerms"
                                            onChange={handleChange}
                                        >
                                            <option value={values.paymentTerms}>Net 1 Day</option>
                                            <option value={values.paymentTerms}>Net 7 Days</option>
                                            <option value={values.paymentTerms}>Net 20 Days</option>
                                            <option value={values.paymentTerms}>Net 30 Days</option>
                                        </select>
                                        {errors.paymentTerms && <p>{errors.paymentTerms}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className="input-groups">
                                <label htmlFor="projectDescription">Project Description</label>
                                <input
                                    type="text"
                                    name="projectDescription"
                                    id="projectDescription"
                                    value={values.projectDescription}
                                    onChange={handleChange}
                                />
                                {errors.projectDescription && <p className="danger error">{errors.projectDescription}</p>}
                            </div>
                            <h5>List Items</h5>
                            <div className="input-groups list-items">
                                <div className="input-combo">
                                    <div className="combo">
                                        <label htmlFor="itemName">Item Name</label>
                                        <input
                                            type="text"
                                            name="itemName"
                                            id="itemName"
                                            value={values.itemName}
                                            onChange={handleChange}
                                        />
                                        {errors.itemName && <p className="danger error">{errors.itemName}</p>}
                                    </div>
                                    <div className="combo">
                                        <label htmlFor="itemCityitemPrice">City</label>
                                        <input
                                            type="text"
                                            name="itemCity"
                                            id="itemCity"
                                            value={values.itemCity}
                                            onChange={handleChange}
                                        />
                                        {errors.itemCity && <p className="danger error">{errors.itemCity}</p>}
                                    </div>
                                    <div className="combo">
                                        <label htmlFor="itemPrice">Price</label>
                                        <input
                                            type="number"
                                            name="itemPrice"
                                            id="itemPrice"
                                            value={values.itemPrice}
                                            onChange={handleChange}
                                        />
                                        {errors.itemPrice && <p className="danger error">{errors.itemPrice}</p>}
                                    </div>
                                    <div className="combo">
                                        <label htmlFor="totalItem">Total</label>
                                        <input
                                            type="text"
                                            name="totalItem"
                                            id="totalItem"
                                            value={values.totalItem}
                                            onChange={handleChange}
                                        />
                                        {errors.totalItem && <p className="danger error">{errors.totalItem}</p>}
                                    </div>
                                    <div className="combo">
                                        <img src={icons.deleteBtn} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-groups">
                                <button className='addNew-invoice'>
                                    <img src={icons.plus} />
                                    Add New Invoice
                                </button>
                            </div>
                            <div className="invoice-control-btn">
                                <div className="control-btn">
                                    <div className="discard">
                                        <button className='discard-btn'>
                                            Discard
                                        </button>
                                    </div>
                                    <div className="draft-save-btn">
                                        <div className="draft">
                                            <button className='draft-btn'>
                                                Save as Draft
                                            </button>
                                        </div>
                                        <div className="save">
                                            <button className='save-btn'>
                                                Save & Send
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewInvoice