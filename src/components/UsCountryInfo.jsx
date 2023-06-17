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
