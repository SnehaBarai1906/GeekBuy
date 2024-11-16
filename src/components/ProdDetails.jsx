import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./prod.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { DownloadIcon } from "@chakra-ui/icons";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutLined";
import { Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const ProdDetails = () => {
  const [oneData, setOneData] = useState({ rating: { rate: 0, count: 0 } });
  const { id } = useParams();

  async function fetchData(id) {
    try {
      let res = await fetch(`http://localhost:3000/data/${id}`);
      console.log(id);
      let data = await res.json();
      setOneData(await data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const [counter, setCounter] = useState(1);

  const increment = () => {
    counter == 10 ? setCounter(10) : setCounter(counter + 1);
  };

  const decrement = () => {
    counter > 1 ? setCounter(counter - 1) : setCounter(1);
  };

  async function handleCart() {
    let obj = {
      id: oneData.id,
      title: oneData.title,
      image: oneData.image,
      description: oneData.description,
      price: oneData.price,
      quantity: counter,
      rating: {
        rate: oneData.rating.rate,
        count: oneData.rating.count,
      },
    };
    let res = await fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }

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
            <span className="checked">
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
            {/* <CurrencyRupeeIcon className="rupeeIcon" /> */}$ {oneData.price}
          </h2>
          <div id="off">
            <p id="hov">2% OFF New User</p>
            <Popover trigger="hover">
              <PopoverTrigger>
                <p id="getCpn">Get Coupons</p>
              </PopoverTrigger>
              <PopoverContent placement="bottom">
                <PopoverArrow />
                <div id="show_offer">
                  <h2>New User Coupon</h2>
                  <div>
                    <div id="cpnDet">
                      <p style={{ fontSize: "19px", color: "black" }}>
                        2% OFF, max save Rs. 676.17
                      </p>
                      <p style={{ fontsize: "2px", color: "black" }}>
                        Valid within 7 days after received
                      </p>
                    </div>
                    <div>
                      <button>Get Now</button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div id="from">
            <p>Ship From:</p>
            <p id="from_country">China</p>
          </div>
          <div id="qty">
            <p>QTY:</p>
            <div id="qty_button">
              <button id="minus" onClick={decrement}>
                <RemoveIcon />
              </button>
              <input type="text" id="qtyNum" value={counter} />
              <button id="plus" onClick={increment}>
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
            <button id="btn1" onClick={handleCart}>
              Add to Cart
            </button>
            <button id="btn2">Buy Now</button>
            <button id="heartBtn">
              <FavoriteBorderOutlinedIcon />
            </button>
            <p>16</p>
          </div>
          <div id="payment">
            <p>Payment</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01IiJEzLYwzuQethJraGGG-3-vbKQ8AbQTQ&s"
              alt=""
            />
          </div>
          <div id="infoBar">
            <DownloadIcon />
            <p>Dropshipping Download</p>
            <ArticleOutlinedIcon />
            <p>Bulk Order Rebate</p>
          </div>
        </div>
      </div>
      <div id="below">
        <h2 id="descrip">
          <a href=".des">Description</a>
        </h2>
        <h2 id="rev">
          <a href="#custReview">Review</a>
        </h2>
        <h2 id="qa">
          <a href="#desQA">Q&A</a>
        </h2>
      </div>
      <div id="below_content">
        <p>
          <p className="des">Highlights</p>
          {oneData.description}
          <br />
        </p>
        <div id="custPhoto">
          <h2>Customer Photos</h2>
          <p>
            Be the first to{" "}
            <span style={{ color: "blue" }}>Upload A photo </span>
            of this product
          </p>
        </div>
        <div id="custVid">
          <h2>Customer Videos</h2>
          <p>
            Be the first to
            <span style={{ color: "blue" }}> Upload A Video </span>of this
            product
          </p>
        </div>
        <h2>Customer Reviews</h2>
        <div id="custReview">
          <div id="rateStar">
            <p>
              <span id="rateNo"> {oneData.rating.rate} </span> out of 5
            </p>
            <span className="checked">
              <StarRoundedIcon />
            </span>
            <span className="checked">
              <StarRoundedIcon />
            </span>
            <span className="checked">
              <StarRoundedIcon />
            </span>
            <span>
              <StarRoundedIcon />
            </span>
            <span>
              <StarRoundedIcon />
            </span>
          </div>
          <div>
            <div className="row">
              <div className="side">
                <div>5 star</div>
              </div>
              <div className="middle">
                <div className="bar-container">
                  <div className="bar-5"></div>
                </div>
              </div>
              <div className="side right">
                <div>0</div>
              </div>
              <div className="side">
                <div>4 star</div>
              </div>
              <div className="middle">
                <div className="bar-container">
                  <div className="bar-4"></div>
                </div>
              </div>
              <div className="side right">
                <div>0</div>
              </div>
              <div className="side">
                <div>3 star</div>
              </div>
              <div className="middle">
                <div className="bar-container">
                  <div className="bar-3"></div>
                </div>
              </div>
              <div className="side right">
                <div>0</div>
              </div>
              <div className="side">
                <div>2 star</div>
              </div>
              <div className="middle">
                <div className="bar-container">
                  <div className="bar-2"></div>
                </div>
              </div>
              <div className="side right">
                <div>0</div>
              </div>
              <div className="side">
                <div>1 star</div>
              </div>
              <div className="middle">
                <div className="bar-container">
                  <div className="bar-1"></div>
                </div>
              </div>
              <div className="side right">
                <div>0</div>
              </div>
            </div>
          </div>
          <div id="revBtn">
            <Button margin="7px" bg="rgb(20, 74, 237)" color="white">
              Write a Review
            </Button>
          </div>
        </div>
        <div>
          <Tabs colorScheme="blue">
            <TabList>
              <Tab>All</Tab>
              <Tab>Images</Tab>
              <Tab>Videos</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p style={{ textAlign: "center" }}>No reviews</p>
              </TabPanel>
              <TabPanel>
                <p style={{ textAlign: "center" }}>No reviews</p>
              </TabPanel>
              <TabPanel>
                <p style={{ textAlign: "center" }}>No reviews</p>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <h2 id="desQA">Question & Answers</h2>
          <Tabs>
            <TabList>
              <Tab>All</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>No Discussion</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Button bg="rgb(20, 74, 237)" color="white">
            Ask a Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
