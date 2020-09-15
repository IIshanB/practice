//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
const hours = today.getHours();

var wish = "";

const customStyle = {
  Color: ""
};

if (hours < 12) {
  wish = "Good Moring";
  customStyle.color = "red";
} else if (hours < 18) {
  wish = "Good Afternoon";
  customStyle.color = "green";
} else {
  wish = " Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {wish}
  </h1>,
  document.getElementById("root")
);
