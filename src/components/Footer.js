import React from "react";
import '../app.css';

var style = {
  backgroundColor: "rgb(45, 43, 54)",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "55px",
  width: "100%"
};

function Footer() {
  return ( 
  <><div style={style}>
    <div className="copyright">Copyright 2022 @Loisarn</div>
  </div>
  </>
  )
}

export default Footer;
