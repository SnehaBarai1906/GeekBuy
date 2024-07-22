import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./prod.css";

const ProdDetails = () => {
  const { id } = useParams();
  const [oneData, setOneData] = useState({});

  async function fetchData() {
    try {
      let res = await fetch(`http://localhost:3000/data/${id}`);
      let data = await res.json();
      setOneData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="Container">
      <div className="Image">
        <img src={oneData.imageUrl} alt={oneData.name} />
      </div>

      <div className="SidePanel">
        <h1>{oneData.title}</h1>
        <div className="InfoBar">
          <div className="revStar"></div>
          <span className="revVal">{oneData.rating}</span>
          <span className="revCount">
            <i>{oneData.reviewsCount}</i> Reviews
          </span>
          <span className="BrandName">
            Brand: <i>{oneData.brand}</i>
          </span>
          <span className="item_code">
            <span className="item_code_txt">Item Code:</span>
            <span className="item_code_val">{oneData.itemCode}</span>
          </span>
        </div>

        <div className="pdt_timer">
          <span className="pdt_timer">Flash Deal</span>
          <div className="count_down">
            Ends In:
            <span data-countdown={oneData.dealEnd}></span>
          </div>
        </div>
        <div className="price_box">
          <span className="reg_price">{oneData.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
