import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./about";

function Freebook() {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
      } catch (error) {
        setError("Failed to load books. Please try again later.");
        console.log(error);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: book.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, book.length),
    slidesToScroll: Math.min(3, book.length),
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, book.length),
          slidesToScroll: Math.min(3, book.length),
          infinite: book.length > 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(2, book.length),
          slidesToScroll: Math.min(2, book.length),
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(1, book.length),
          slidesToScroll: Math.min(1, book.length),
        },
      },
    ],
  };

  // Inline styles for the 3D gradient box
  const boxStyle = {
    position: "relative",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "15px",
    backgroundColor: "#fff",
    color: "#333",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
    overflow: "hidden",
    transform: "translateZ(0)",
    transition: "transform 0.3s ease",
  };

  const gradientBorderStyle = {
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    zIndex: "-1",
    borderRadius: "inherit",
    background: "linear-gradient(45deg, #ff6ec4, #7873f5)",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <div>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "600", paddingBottom: "10px" }}>
          Project
        </h1>
        
        <div style={boxStyle}>
          <div style={gradientBorderStyle}></div>
          <h2 style={titleStyle}>Auto Value Insight</h2>
          <p>
            Developed a machine learning model to forecast car prices based on features such as make, model, Year,
            mileage,and  condition.
            Utilized Python and scikit-learn for data preprocessing, model training, and evaluation Achieved high accuracy in price
            on predictions Provided actionable insights into key factors influencing car prices.
          </p>
        </div>
        
        <div style={boxStyle}>
          <div style={gradientBorderStyle}></div>
          <h2 style={titleStyle}>College Bus Transport Website</h2>
          <p>
          College Bus Transport Website allows students to login and register for Bus transport Service.
          The system has two modules that is one for user and another for admin .The Website in User-Friendly 
          and Provides Easy-to-Use Interface.
          </p>
        </div>

      
      </div>

      
    </div>
  );
}

export default Freebook;
