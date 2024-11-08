import React from "react";

export default function Card({ image, title, price }) {
  return (
    <div style={{ border: "1px solid black", display: "flex",height:"100%",width:"100%",marginTop:"10px" }}>
      <div>
        <img src={image} width={"60px"} height={"60px"} />
      </div>
      <div style={{ display: "flex" }}>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}
