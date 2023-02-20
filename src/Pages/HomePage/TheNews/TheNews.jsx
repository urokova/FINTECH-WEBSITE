import React from "react";
import "./TheNews.css";
import News from "../../../assets/imgs/news.png";

function TheNews() {
  return (
    <div className="theNews">
      <div className="container">
        <div className="row">
          <div className="newBtn">
            <h1 className="titleH1">{"<yangiliklar/>"}</h1>
            <button className="seeAllBtn">Hammasini ko’rish</button>
          </div>
          <div className="newBody">
            <div className="cards">
              <div className="imgs">
                <img src={News} alt="newImg" />
              </div>
              <div className="cardBody">
                <h1>
                  TASAVVUR QILING SHU OPA <br /> SIZGA DARS O’TADI
                </h1>
                <p>
                  O’quv markazimizda shunaqa o’qituvchilar bor, dars qilmasangiz
                  ham <br /> darsga kelgingiz keladi, siz manga ishoning bo’ldi.
                </p>
                <button className="detailBtn">BATAFSIL</button>
              </div>
            </div>
            <div className="cards">
              <div className="imgs">
                <img src={News} alt="newImg" />
              </div>
              <div className="cardBody">
                <h1>
                  TASAVVUR QILING SHU OPA <br /> SIZGA DARS O’TADI
                </h1>
                <p>
                  O’quv markazimizda shunaqa o’qituvchilar bor, dars qilmasangiz
                  ham <br /> darsga kelgingiz keladi, siz manga ishoning bo’ldi.
                </p>
                <button className="detailBtn">BATAFSIL</button>
              </div>
            </div>
            <div className="cards">
              <div className="imgs">
                <img src={News} alt="newImg" />
              </div>
              <div className="cardBody">
                <h1>
                  TASAVVUR QILING SHU OPA <br /> SIZGA DARS O’TADI
                </h1>
                <p>
                  O’quv markazimizda shunaqa o’qituvchilar bor, dars qilmasangiz
                  ham <br /> darsga kelgingiz keladi, siz manga ishoning bo’ldi.
                </p>
                <button className="detailBtn">BATAFSIL</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheNews;
