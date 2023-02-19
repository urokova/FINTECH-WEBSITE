import React from "react";
import "./WorkStudents.css";
import Web from "../../../assets/imgs/web.png";
import Unired from "../../../assets/imgs/unired.png";
import Crm from "../../../assets/imgs/crm.png";
import Student1 from "../../../assets/imgs/Ellipse 1.png";
import Student2 from "../../../assets/imgs/Ellipse 2.png";
import Student3 from "../../../assets/imgs/Ellipse 3.png";
import Student4 from "../../../assets/imgs/Ellipse 4.png";

function WorkStudents() {
  return (
    <div className="workStudents">
      <div className="container">
        <div className="row">
          <div className="studentsTitle">
            <h1 className="titleH1">{"<Talabalarimizning_ishlari/>"}</h1>
            <button>Hammasini ko’rish</button>
          </div>
          <div className="studentsCard">
            <h1 className="webTitle">WEBSITE DESIGN</h1>
            <div className="webImg">
              <img src={Web} alt="web design" />
            </div>
            <div className="studentsimgs">
              <img src={Student1} alt="students img" />
              <img src={Student2} alt="students img" />
              <img src={Student3} alt="students img" />
              <img src={Student4} alt="students img" />
              <div className="team">
                <h2>SHumqorlar jamoasi</h2>
                <p>Loyiha shu jamoa a’zolari tomonidan yaratildi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rowBody">
          <div className="cards">
            <h1 className="webTitle">UNIRED MOBILE</h1>
            <div className="phoneImg">
              <img src={Unired} alt="unired img" />
            </div>
            <div className="studentsimgs">
              <img src={Student1} alt="students img" />
              <img src={Student2} alt="students img" />
              <img src={Student3} alt="students img" />
              <img src={Student4} alt="students img" />
              <div className="team">
                <h2>SHumqorlar jamoasi</h2>
                <p>Loyiha shu jamoa a’zolari tomonidan yaratildi</p>
              </div>
            </div>
          </div>
          <div className="cardsСrm">
            <h1 className="webTitle">UNIRED MOBILE</h1>
            <div className="crmImg">
              <img src={Crm} alt="unired img" />
            </div>
            <div className="studentsimgs">
              <img src={Student1} alt="students img" />
              <img src={Student2} alt="students img" />
              <img src={Student3} alt="students img" />
              <img src={Student4} alt="students img" />
              <div className="team">
                <h2>SHumqorlar jamoasi</h2>
                <p>Loyiha shu jamoa a’zolari tomonidan yaratildi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkStudents;
