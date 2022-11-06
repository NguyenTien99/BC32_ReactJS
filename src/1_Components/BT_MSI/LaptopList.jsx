import React from "react";
import LaptopItem from "./LaptopItem";

const LaptopList = () => {
  return (
    <section
      id="laptop"
      className="container-fluid pt-5 pb-5 bg-light text-dark"
    >
      <h1 className="text-center">BEST LAPTOP</h1>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <LaptopItem />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <LaptopItem />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <LaptopItem />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <LaptopItem />
        </div>
      </div>
    </section>
  );
};

export default LaptopList;
