import React from "react";
import "./right.css";
import img from "../../assets/images/Ellipse.png"
import {FiChevronDown} from "react-icons/fi"
import { BsArrowLeft,BsBoxArrowInRight,BsBoxArrowInUpRight } from "react-icons/bs";

export default function Right() {
  return (
    <div className="right">
      <div className="right-top">
        <button className="right-top-button-1">
          <img src={img} alt={""} />
          <p>  Avalanche</p>
          <FiChevronDown  fontSize={"1rem"} />
        </button>
        <button className="right-top-button-2">
          <div className="right-top-button-2-icon"> </div>
          <p>0xf6...1353</p>
          <FiChevronDown fontSize={"1rem"}/>
        </button>
      </div>
      <div className="right-middle">
        <div className="right-middle-head">
          <BsArrowLeft/>
          <p>Custom link</p>
        </div>
       <div className="right-middle-middle">
         <p>https://testnet.xyz.xyz/trade?ref=</p>
         <input type="text" placeholder="ENTER"/>
       </div>
      </div>
      <div className="right-bottom">
        <button className="right-bottom-button-1">
        <BsBoxArrowInUpRight />
        <p>Custom Link</p>
        </button>
        <button className="right-bottom-button-2">
        <BsBoxArrowInRight/>
        <p>Cancel</p>
        </button>
      </div>
    </div>
  );
}
