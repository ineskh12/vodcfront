import React from "react";
import { FrontSide, BackSide } from "react-flippy";

const CardContents = ({ children }) => (
  <React.Fragment>
    <FrontSide
      style={{
        backgroundColor: "lightGreen",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "15px"
      }}
    >
      <p>FRONT SIDE</p>
      <span
        style={{
          fontSize: "13px",
          position: "absolute",
          bottom: "50px",
          width: "100%"
        }}
      >
        {children}
      </span>
    </FrontSide>
    <BackSide
      style={{
        backgroundColor: "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "15px"
      }}
    >
      <p>BACK SIDE</p>
      <span
        style={{
          fontSize: "13px",
          position: "absolute",
          bottom: "50px",
          width: "100%"
        }}
      >
        {children}
      </span>
    </BackSide>
  </React.Fragment>
);

export default CardContents