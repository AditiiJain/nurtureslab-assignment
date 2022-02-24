import React, { useState, useEffect } from "react";
import "./middle.css";
import { MdClose } from "react-icons/md";
import middleAd from "../../assets/images/middleAd.png";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import MiddleSectionCard from "../../components/middleSectionCard/middleSectionCard";
import axios from "axios";

const baseURL =
  "https://raw.githubusercontent.com/akshita151199/APIs/main/data";

export default function Middle() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get(baseURL);
      setData(response.data.data);
    };
    requestData();
  }, []);

  const userName = (d) => {
    return d.user.substr(0, 5) + "..." + d.user.substr(-7);
  };
  return (
    <div className="middle">
      <div className="middle-head">
        <div className="middle-head-left">Section</div>
        <div className="middle-head-right">
          <div className="middle-head-right-icon"></div>
          <p className="middle-head-right-title">0.2 $XYZ</p>
          <button className="middle-head-right-button">Tier 1</button>
        </div>
      </div>
      <div className="middle-banner">
        <div className="middle-banner-inside">
          <div className="middle-banner-left">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              indusrty.
            </p>
            <button>Tutorial</button>
          </div>
          <div className="middle-banner-right">
            <img src={middleAd} alt={""} />
          </div>
        </div>
        <div className="middle-banner-cross">
          <MdClose className="middle-banner-cross-icon" />
        </div>
      </div>
      <div className="middle-card-1">
        <div className="middle-card-1-left">
          <p>Your rewards</p>
          <h4>$0.26231428</h4>
          <div className="middle-card-1-left-tags">
            <div>$40 AVAX</div>
            <div>$10 BNB</div>
            <div>$210 BTC</div>
          </div>
        </div>
        <div className="middle-card-1-right">
          <button>
            <BsBoxArrowInUpRight fontSize={"1.2rem"} />
            <p>Custom Link</p>
          </button>
        </div>
      </div>
      <div className="middle-card-2">
        <MiddleSectionCard />
        <MiddleSectionCard />
      </div>
      <div className="middle-table">
        <div className="middle-table-head">
          <p className="middle-table-head-active"> First Tab</p>
          <p> Second Tab</p>
        </div>
        <div className="middle-table-table">
          <table>
            <thead>
            <tr className="middle-table-table-head">
              <th>ASSET</th>
              <th>AMOUNT</th>
              <th>USER ACCOUNT</th>
              <th>REFERRAL EARNING</th>
            </tr>
            </thead>
            <tbody>
            {Array.from(data).map((d, index) => {
              return (
<>
                <tr>
                  <td>
                    <div className="table-asset">
                      <div>
                        <img src={d.img} alt="" />
                      </div>
                      <div className="table-asset-child">
                        <h5>{d.asset}</h5>
                        <div className="table-asset-bottom">
                          <p className="table-asset-bottom-left">{d.type}</p>
                          <div className="table-asset-child-child">
                            <div className="table-asset-child-child-left">
                            <img src={d.chain.img} alt="" />
                            </div>
                            <p className="table-asset-child-child-right">{d.chain.name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="table-amount">
                      <p >{d.amount} BNB</p>
                      <p className="table-amount-bottom">{d.state}</p>
                    </div>
                  </td>
                  <td>
                    <div className="table-user">{userName(d)}</div>
                  </td>
                  <td>
                    <div className="referral">
                      <p>{d.referral_earnings}BNB</p>
                      <p className="referral-bottom">
                        View on BSC Scan <BsBoxArrowInUpRight />
                      </p>
                    </div>
                  </td>
                </tr>
                </>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
