import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {

  let navigate = useNavigate();

  // for name
  const [name, setName] = useState("");
  const nameEvent = (event) => {
    setName(event.target.value)
  };

  // for mobile
  const [mobile, setMobile] = useState("");
  const mobEvent = (event) => {
    setMobile(event.target.value)
  };

  // for mail
  const [mail, setMail] = useState("");
  const mailEvent = (event) => {
    setMail(event.target.value);
  };
  
  const submitForm = (e)=> {
    e.preventDefault();
    navigate(`/success`);
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>

        <div className="container-fluid contact_div mb-5">
          <div className="row">
            <div className="col-md-7 mx-auto">
              <form action="" onSubmit={submitForm}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    onChange={nameEvent}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter your full name"
                    value={name}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Phon No
                  </label>
                  <input
                    type="number"
                    onChange={mobEvent}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Mobile Number"
                    value={mobile}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    onChange={mailEvent}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email Address"
                    value={mail}
                    required
                  />
                </div>
                {/* <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Email</label>
                  <textarea type="email"rows="4" className="form-control" id="exampleInputEmail1" placeholder="Email Address" required ></textarea>
                </div> */}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
