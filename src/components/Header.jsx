import React from "react";
import { Col } from "react-bootstrap";
import css from "./Header.module.css";

const Header = () => {
  return (
    <Col xs={12} className={css.bgHeader}>

     <h1 className={css.wellcome}>Wellcome to</h1>
     <h1 className={css.title}>MINECRAFT WORLD</h1>
    </Col>
  );
};

export default Header;
