import AllContacts from "./AllContacts";
import UsContacts from "./UsContacts";

const Problem2 = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="btn-wrapper d-flex align-items-center justify-content-center">
          <div className="btn-box">
            <h4 className="text-center text-uppercase mb-5">Problem-2</h4>
            <div className="d-flex justify-content-center gap-3">
              <AllContacts btnText="All Contacts" modalHead="All Contacts" />
              <UsContacts btnText="US Contacts" modalHead="US Contacts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
