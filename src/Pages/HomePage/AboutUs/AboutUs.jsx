import React from "react";
import "./AboutUs.css";
import { VectorTop } from "../../../assets/Svgs";
import { VectorBottom } from "../../../assets/Svgs";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="container">
        <div className="row">
          <div className="aboutTitle">
            <h1 className="titleH1">{"<biz_haqimizda/>"}</h1>
          </div>
          <div className="aboutTextScroll">
            <p>
              FINTECHHUB O‘QUV markazi ZAMONAVIY kasb hisoblanuvchi
              dasturlashning turli ko’rinishlaridan o‘quvchilarga 234sifatli
              ta’lim berish bilan shug’ullanuvchi IT o’quv markaz hisoblanadi.
            </p>
            <div className="scrollBtn">
              <div>{VectorTop}</div>
              <span>SCROLL</span>
              <div>{VectorBottom}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
