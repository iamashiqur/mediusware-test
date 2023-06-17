import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UsCountryInfo = ({ btnText, modalHead, coutrylist }) => {
  console.log(coutrylist);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <button type="button" className="btn btn-outline-primary">
        {btnText}
      </button>

      <div
        className="modal fade"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{modalHead}</h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <p>Modal content for {btnText}</p>
            </div>

          </div>
        </div>
      </div> */}
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ width: "120px", height: "50px" }}
        className="me-3 mb-4"
      >
        {coutrylist.country.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{coutrylist.country.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="info-wrapper">
            <span># {coutrylist.country.id}</span>
            <h3>{coutrylist.country.name} </h3>
            <a href={coutrylist.phone}>{coutrylist.phone}</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UsCountryInfo;
