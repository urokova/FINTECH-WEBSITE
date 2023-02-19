import React, { useState } from "react";
import "./Contact.css";
import ContactImg from "../../../assets/imgs/contact.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Contact() {
  const [value, setValue] = useState("");
  return (
    <div className="contact">
      <div className="container">
        <h1 className="titleH1">{"<aloqa/>"}</h1>
        <div className="row">
          <div className="contactImgs">
            <img src={ContactImg} alt="contactImg" />
          </div>
          <div className="contactRegister">
            <h1>SUPPORT JAMOASI 24/7</h1>
            <p>
              Konsultatntimiz sizga bepul yo’nalish ko’rsatib, sizga mos
              darslarni topishga va to’liq <br /> ma’lumot beradi. Siz shunchaki
              telefon raqam va ismingizni jo’natsangiz bo‘ldi.
            </p>
            <form action="">
              <PhoneInput
                type="tel"
                country={"uz"}
                value={value}
                onChange={setValue}
              />
              <input
                className="inputTitle"
                type="text"
                placeholder="ISM SHARIFLARI NIMA EDI?"
              />
              <button>JO‘NATISH</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
  // git config --global user.email "you@example.com"
  // git config --global user.name "Your Name"