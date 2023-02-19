import React from "react";
import "./Courses.css";
import { CoursesFrontIcons } from "../../../assets/Svgs";
import { CoursesBackIcons } from "../../../assets/Svgs";
import { CoursesMobileIcons } from "../../../assets/Svgs";
function Courses() {
  return (
    <div className="courses">
      <div className="container">
        <div className="row">
          <div className="coursesTitle">
            <h1 className="titleH1">{"<kurslarimiz/>"}</h1>
          </div>
          <div className="coursesBody">
            <div className="coursesBtns">
              <button>OFFLINE</button>
              <button>ONLINE</button>
              <button>ZOOM</button>
            </div>
            <div className="coursesCard">
              <div className="cardsOne">
                <p>
                  Darslarimiz ayni damda Toshkandning eng a’lo, bilimli, <br />
                  tarbiyali bo’lmish mentorlarimiz tomonidan o’rgatiladur.
                  <br /> Va o’qivuchi g’irt tupoy bo’lsa ham hech bo’lmaganda
                  <br /> kompyuterni ishlatishni o’rgana oladur.
                </p>
              </div>
              <div className="cardsTwo cards">
                <div>{CoursesFrontIcons}</div>
                <h1>
                  FRONT-END <br /> DASTURLASH
                </h1>
                <div className="month">
                  <p>
                    8 <br /> oy
                  </p>
                </div>
              </div>
              <div className="cardsTwo cards">
                <div>{CoursesBackIcons}</div>
                <h1>
                  BACK-END <br /> DASTURLASH
                </h1>
                <div className="month">
                  <p>
                    8 <br /> oy
                  </p>
                </div>
              </div>
              <div className="cardsTwo cards">
                <div>{CoursesMobileIcons}</div>
                <h1>
                  MOBILE <br /> DASTURLASH
                </h1>
                <div className="month">
                  <p>
                    8 <br /> oy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
