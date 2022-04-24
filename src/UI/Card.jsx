import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/gallery-1.jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" title={props.title} alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.text}
            </p>
            <NavLink to= {props.button} className="btn btn-primary">
              {props.btxt}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
