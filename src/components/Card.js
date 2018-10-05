import React from "react";
import { Card, CardImg, CardImgOverlay } from "reactstrap";
import redMan from "../assets/redMan.svg";
import purpleMan from "../assets/purpleMan.svg";

const whatWeDo = props => {
  return (
    <div>
      <Card inverse>
        <CardImgOverlay>
          {/* <img alt="Card image cap" /> */}
          <div style={{ display: "flex3" }}>
            <CardImg src={purpleMan} alt="Card image cap" />
            <CardImg src={redMan} alt="Card image cap" />
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default whatWeDo;
