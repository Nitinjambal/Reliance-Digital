import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
// import ProductDetails from "../Pages/ProductDetails";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "290px",
  backgroundSize: "cover",
};

function ImageSlider(props) {
  const { url, id } = props;
  return (
    <div>
      <Slide>
        {props?.details?.map((image, index) => (
          <div key={image.id}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default ImageSlider;
