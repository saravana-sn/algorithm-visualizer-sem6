import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Algorithms = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Algorithms</h1>
        <br></br>

        <div className="container-fluid nav_bg mb-5">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row g-3">
                {
                  Sdata.map((val, index)=>{
                      return <Card key={index} imgsrc={val.imgsrc} title={val.title} text={val.text} button={val.button} btxt={val.btxt}/>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Algorithms;
