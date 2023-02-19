import React from "react";
import "./Footer.css";
import { FooterLogo } from "../../assets/Svgs";
import { Telegram } from "../../assets/Svgs";
import { Facebook } from "../../assets/Svgs";
import { Instagram } from "../../assets/Svgs";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footLogo">{FooterLogo}</div>
        <div className="row">
          <div className="footLogo">
            <h2>Toshkent shahar, Uchtepa tumani, Lutfikor ko’chasi 112a</h2>
            <p>+99871 203 88 00</p>
            <div className="networks">
              <div>{Telegram}</div>
              <div>{Facebook}</div>
              <div>{Instagram}</div>
            </div>
            <p className="years">© All rights reserved, 2022</p>
          </div>
          <ul>
            <h3>KURSLAR</h3>
            <li>FRONT-END</li>
            <li>BACK-END</li>
            <li>.NET DEVELOPMENT</li>
            <li>PYTHON</li>
          </ul>
          <ul>
            <h3>BO’LIMLAR</h3>
            <li>BIZ HAQIMIZDA</li>
            <li>ROADMAP</li>
            <li>BIZ BILAN ALOQA</li>
            <li>TALABALARIMIZ ISHLARI</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
