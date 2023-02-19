import React from "react";
import "./Statistics.css";

function Statistics() {
  return (
    <div className="statistics">
      <div className="container">
        <div className="row">
          <div className="statisticsText">
            <h1 className="titleH1">{"<statistika/>"}</h1>
          </div>
          <div className="statisticsCards">
            <div className="cards">
              <p className="cardsText">
                Hozirda o’quvchilarimiz
                <br /> ko’rsatayotgan natijalar bizning
                <br />
                maqsadimizga barqaror
                <br /> yaqinlashayotganimizning
                <br /> yaqqol isbotidir!
              </p>
            </div>
            <div className="cards bord">
              <h1>250+</h1> <br />
              <p>Bitiruvchi</p>
            </div>
            <div className="cards bord">
              <h1>$400+</h1> <br />
              <p>O’rtacha maosh</p>
            </div>
            <div className="cards bord">
              <h1>79%</h1> <br />
              <p>Ishga joylashish</p>
            </div>
            <div className="cards">
              <h1></h1> <br />
              <p></p>
            </div>
            <div className="cards">
              <h1>12+</h1> <br />
              <p>Malakali mentorlar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
