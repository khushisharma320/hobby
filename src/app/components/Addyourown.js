import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

// import 'bootstrap/dist/css/bootstrap.css';

const Addyourown = () => {
    return (
        <div className="container mt-5 mb-5 d-flex justify-content-center" style={{backgroundColor: "#F7FDFF"}}>
            <div className="card p-4 h-25" style={{width: "83%"}}>
                <div class="card-body">
                    <div className="d-flex gap-2">
                        <span style={{ color: "#8064A2", fontSize: "20px" }}><FontAwesomeIcon icon={faCirclePlus} /></span>
                        <h5 class="card-title">Add Your Own</h5>
                    </div>
                    <p style={{ fontSize: "12px" }} class="card-text">Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.</p>
                    <div>
                        <button type="button" class="btn btn-outline-sucess" style={{
                            color: "#8064A2",
                            borderColor: "#8064A2",
                            borderWidth: "1px",
                            borderStyle: "solid"
                        }}>Add New</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Addyourown;
