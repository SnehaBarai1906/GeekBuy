import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./prod.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ProdDetails = () => {
  const { id } = useParams();
  const [oneData, setOneData] = useState({ rating: { rate: 0, count: 0 } });

  async function fetchData() {
    try {
      let res = await fetch(`http://localhost:3000/data/${id}`);
      let data = await res.json();
      setOneData(await data);
      console.log(data);
      console.log(oneData);
      // console.log(oneData.rating);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="content">
      <p>Home / {oneData.category}</p>

      <div id="product">
        <div id="image">
          <img src={oneData.image} alt="" />
        </div>
        <div id="data">
          <h2 id="title">{oneData.title}</h2>
          <div id="small">
            <span className="fa fa-star checked">
              <StarRoundedIcon />
            </span>
            <p id="rating">{oneData.rating.rate}</p>
            <p>{oneData.rating.count} Reviews</p>
            <p id="brand">Brand: Wltoys</p>
            <p id="code">Item Code: 123456</p>
          </div>
          <div className="pdt_timer">
            <span className="flashIcon">
              <FlashOnRoundedIcon />
            </span>
            <span className="flashText">Flash Deal</span>
            {/* <div className="count_down">
                       Ends In:
                       <span data-countdown=></span>*/}
          </div>

          <h2 id="price">
            <CurrencyRupeeIcon /> {oneData.price}
          </h2>
          <div id="off">
            <p id="hov">2% OFF New User</p>
            <p id="getCpn">Get Coupons</p>
          </div>
          <div id="show_offer">
            <h2>New User Coupon</h2>
            <div>
              <div>
                <p>2% OFF, max save $10</p>
                <p>Valid only for 7 days after received</p>
              </div>
              <div>
                <button>Get Now</button>
              </div>
            </div>
          </div>
          <div id="from">
            <p>Ship From:</p>
            <p id="from_country">China</p>
          </div>
          <div id="qty">
            <p>QTY:</p>
            <div id="qty_button">
              <button id="minus">
                <RemoveIcon />
              </button>
              <input type="text" id="number" defaultValue="1" />
              <button id="plus">
                <AddIcon />
              </button>
            </div>
          </div>
          <div id="ship">
            <p>Shipping:</p>
            <p>Can ship to</p>
            <select name="" id="select">
              <option value="">India</option>
              <option value="">China</option>
              <option value="">USA</option>
            </select>
          </div>
          <div id="buton">
            <button id="btn1">Add to Cart</button>
            <button id="btn2">Buy Now</button>
            <button id="heartBtn">
              <FavoriteBorderOutlinedIcon />
            </button>
            <p>16</p>
          </div>
          <div id="payment">
            <p>Payment</p>
            <img
              src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="below">
        <h2 id="descrip">Description</h2>
        <h2 id="rev">Review</h2>
        <h2 id="qa">Q&A</h2>
      </div>
      <div id="below_content">
        <p>
          <p className="des">Highlights</p>
          {oneData.description}
          <br />
        </p>
      </div>
    </div>
  );
};

export default ProdDetails;
