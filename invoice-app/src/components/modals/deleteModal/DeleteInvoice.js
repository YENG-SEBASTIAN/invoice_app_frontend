import React from 'react'
import './deleteinvoice.css'
import axios from 'axios'
import { useParams, useNavigate} from 'react-router-dom'

const DeleteInvoice = ({ invoiceID, closeModal }) => {



    const handleClose = (e) => {
        closeModal();
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    const deleteInvoice = (id) => {

        axios.delete('http://localhost:8000/invoice/delete-invoice/'+`${id}/`)
        .then(response => {
          console.log(`Deleted post with ID ${id}`);
          window.location = '/'
        })
        .catch(error => {
          console.error(error);
        });
    }
    return (
        <div className="deleteModalBody"
            onClick={(e) => handleClose(e)}
        >
            <div className="deleteModalContent" id='deleteModalBody'
                onClick={(e) => handleChildClick(e)}
            >
                <div className="header">
                    <h2>Confirm deletion</h2>
                </div>
                <div className="msg">
                    <p>Are you sure you want to delete invoice <strong>#{invoiceID}?</strong> this action cannot be undone. </p>
                </div>
                <div className="actionBtns">
                    <div className="cancelButton">
                        <button className="cancelBtn"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                    </div>
                    <div className="deleteButton">
                        <button className="deleteBtn"
                            onClick={() => deleteInvoice(invoiceID)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteInvoice