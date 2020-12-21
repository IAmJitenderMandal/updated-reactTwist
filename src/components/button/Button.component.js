import React from "react";
import "./Button.styles.scss";

export default function Button(props) {
  return <button className={typeof props.addBasketStatus==='undefined'?"btn":props.addBasketStatus?"btn":"disabled_btn"}>{props.children}</button>;
}
