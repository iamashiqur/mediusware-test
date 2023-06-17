import React, { useEffect, useState } from "react";
import UsCountryInfo from "./UsCountryInfo";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UsContacts = ({ btnText, modalHead }) => {
  const [uscoutnry, setUsCoutnry] = useState([]);
  useEffect(() => {
    fetch(
      "https://contact.mediusware.com/api/country-contacts/United%20States/?format=json"
    )
      .then((response) => response.json())
      .then((data) => setUsCoutnry(data.results));
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(uscoutnry);

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
          {uscoutnry.map((coutrylist, index) => (
            <UsCountryInfo
              coutrylist={coutrylist}
              btnText={coutrylist.country.name}
              modalHead="US Country Info"
              key={index}
            />
          ))}
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

export default UsContacts;
