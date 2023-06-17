import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const CountryInfo = ({ countryDetails }) => {
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
        {countryDetails.country.name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{countryDetails.country.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="info-wrapper">
            <span># {countryDetails.country.id}</span>
            <h3>{countryDetails.country.name} </h3>
            <a href={countryDetails.phone}>{countryDetails.phone}</a>
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

export default CountryInfo;
