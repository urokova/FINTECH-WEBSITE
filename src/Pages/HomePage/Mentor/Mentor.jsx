import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import "./Mentor.css";
import { MentorArrowLeft } from "../../../assets/Svgs";
import { MentorArrowRight } from "../../../assets/Svgs";
import MentorImgs1 from "../../../assets/imgs/mentor.png";
import Assestent1 from "../../../assets/imgs/assestent.png";
import MentorImgs2 from "../../../assets/imgs/mentor2.png";
import Assestent2 from "../../../assets/imgs/assestent2.png";

function Mentor() {
  return (
    <div className="mentors">
      <div className="container">
        <h1 className="titleH1">{"<mentorlarimiz/>"}</h1>
        <div className="centerBtn">
          <button className="mentorBtn">
            <div>{MentorArrowLeft}</div> DRAG <div>{MentorArrowRight}</div>
          </button>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="dFlex">
              <div className="row">
                <div className="cards">
                  <div className="mentorsImg">
                    <img src={MentorImgs1} alt="mentor" />
                  </div>
                  <div className="cardTitle">
                    <h2>react</h2>
                    <h2>vue.js</h2>
                    <h2>angular</h2>
                    <h2>tajriba 6-yil</h2>
                  </div>
                  <div className="cardBody">
                    <h2>ALISHER YUSUPOV</h2>
                    <p>Front-end mentori</p>
                  </div>
                </div>
                <div className="cardsAssest">
                  <img src={Assestent1} alt="assestent" />
                  <h2>MUNIRA LUTFILLAYEVA</h2>
                  <p>Front-end assistenti</p>
                </div>
              </div>
              <div className="row">
                <div className="cards">
                  <div className="mentorsImg">
                    <img src={MentorImgs2} alt="mentor" />
                  </div>
                  <div className="cardTitle">
                    <h2>react</h2>
                    <h2>vue.js</h2>
                    <h2>angular</h2>
                    <h2>tajriba 6-yil</h2>
                  </div>
                  <div className="cardBody">
                    <h2>BEKZOD YUSUPOV</h2>
                    <p>Back-end mentori</p>
                  </div>
                </div>
                <div className="cardsAssest">
                  <img src={Assestent2} alt="assestent" />
                  <h2>NODIRA AZAMATOVA</h2>
                  <p>Back-end assistenti</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="dFlex">
              <div className="row">
                <div className="cards">
                  <div className="mentorsImg">
                    <img src={MentorImgs1} alt="mentor" />
                  </div>
                  <div className="cardTitle">
                    <h2>react</h2>
                    <h2>vue.js</h2>
                    <h2>angular</h2>
                    <h2>tajriba 6-yil</h2>
                  </div>
                  <div className="cardBody">
                    <h2>ALISHER YUSUPOV</h2>
                    <p>Front-end mentori</p>
                  </div>
                </div>
                <div className="cardsAssest">
                  <img src={Assestent1} alt="assestent" />
                  <h2>MUNIRA LUTFILLAYEVA</h2>
                  <p>Front-end assistenti</p>
                </div>
              </div>
              <div className="row">
                <div className="cards">
                  <div className="mentorsImg">
                    <img src={MentorImgs2} alt="mentor" />
                  </div>
                  <div className="cardTitle">
                    <h2>react</h2>
                    <h2>vue.js</h2>
                    <h2>angular</h2>
                    <h2>tajriba 6-yil</h2>
                  </div>
                  <div className="cardBody">
                    <h2>BEKZOD YUSUPOV</h2>
                    <p>Back-end mentori</p>
                  </div>
                </div>
                <div className="cardsAssest">
                  <img src={Assestent2} alt="assestent" />
                  <h2>NODIRA AZAMATOVA</h2>
                  <p>Back-end assistenti</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Mentor;
