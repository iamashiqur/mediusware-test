import React, { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AllContacts = ({ btnText, modalHead }) => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/?format=json")
      .then((response) => response.json())
      .then((data) => setCountry(data.results));
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="btn btn-lg btn-outline-warning"
        variant=""
        onClick={handleShow}
      >
        {btnText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHead}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          {country.map((i, index) => {
            return (
              <>
                <CountryInfo key={index} countryDetails={i} />
              </>
            );
          })}
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

export default AllContacts;
