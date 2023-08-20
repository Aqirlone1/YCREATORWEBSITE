import React, { useEffect } from "react";
import "./CreatorVerse.css";
import { Button, Card, Carousel } from "antd";
import Meta from "antd/es/card/Meta";
import fashonIcon from "../../icons/c1.png";
import travelIcon from "../../icons/c2.png";
import businessIcon from "../../icons/c3.png";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import useDocumentTitle from "../useDocumentTitle";

function CreatorVerse() {
useDocumentTitle('Creators')

  const products = [
    {
      title: <span style={{ color: "white" }}>Fashion</span>,
      description: <span style={{ color: "white" }}>Explore Now</span>,
      image: fashonIcon,
    },
    {
      title: <span style={{ color: "white" }}>Travel</span>,
      description: <span style={{ color: "white" }}>Explore Now</span>,
      image: travelIcon,
    },
    {
      title: <span style={{ color: "white" }}>Business</span>,
      description: <span style={{ color: "white" }}>Explore Now</span>,
      image: businessIcon,
    },
    {
        title: <span style={{ color: "white" }}>Fashion</span>,
        description: <span style={{ color: "white" }}>Explore Now</span>,
        image: fashonIcon,
      },
      {
        title: <span style={{ color: "white" }}>Travel</span>,
        description: <span style={{ color: "white" }}>Explore Now</span>,
        image: travelIcon,
      },
      {
        title: <span style={{ color: "white" }}>Business</span>,
        description: <span style={{ color: "white" }}>Explore Now</span>,
        image: businessIcon,
      },
  

  ];
  return (
    <div className="creator-verse-container d-flex justify-content-center align-items-center flex-column py-5">
      <span className="my-2 creator-verse-heading">Join Our Creatorverse</span>
      <p className="creator-verse-description px-md-5 w-75">
        Premium advertising made easy. Your ads by India's top creators,
        discovered by billions of social consumers just waiting to engage with
        you and your brand.
      </p>
      <div className=" my-4 p-2  " style={{width:"95%"}}>
        <Carousel
        dots={false}
          autoplay
          slidesToShow={3}
          arrows={true} 
          style={{width:"100%"}}
          prevArrow={
            <Button
              type="text"
              
              icon={<LeftOutlined style={{ color: "#797979" }} />}
            />
          }
          nextArrow={<Button type="text" icon={<RightOutlined style={{color:"#797979"}} />} />}
        >
          {products.map((product, index) => (
            <div key={index}>
              <Card
                className="mx-4"
                hoverable
                style={{ background: "black", border: "none" }}
                cover={
                  <img
                    alt={"icon"}
                    src={product.image}
                    height={550}
                    width={510}
                  />
                }
              >
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex flex-column align-items-start">
                    <span className="my-1">{product.title}</span>
                    <span className="my-1">{product.description}</span>
                  </div>
                  <span>
                    <ArrowRightOutlined  style={{color:"#797979"}}/>
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CreatorVerse;
