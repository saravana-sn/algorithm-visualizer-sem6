import React from "react";
import Web from './images/myImg.png';
import {NavLink} from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="mt-5">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1
                     align-self-center">
                        <h1>
                            {props.name} <strong className="brand-name">Algorithm Visualizer</strong> 
                        </h1>
                        <h2 className="my-3">
                        <del>MEMORISE</del> VISUALIZE Algorithms!
                        </h2>
                        <div className="mt-3">
                            <NavLink to={props.visited} className="btn-get-started">{props.btnName}</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-lg-2 header-img">
                        <img src={props.img} className="img-fluid" alt="home img"/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
