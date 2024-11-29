import React, { useEffect, useRef, useState } from "react";
import { Col, Image } from "react-bootstrap";
import css from "./MainInfo.module.css";

const MainInfo = () => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, 
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <Col xs={11} lg={9} className={css.infoBox}>
      <h2
        ref={titleRef}
        className={`${css.infoTitle} ${isVisible ? css.infoTitleVisible : ""}`}
      >
        <span>Магнітний </span>
        <span>конструктор</span>
      </h2>
      <Image
        src="../images/mainkraft.png"
        style={{ width: "50%", margin: "10px auto" }}
      />
      <Col className={css.infoText} lg={11}>
        Це ігровий набір, який дозволяє створювати різні 3D-моделі із блоків у
        Minecraft-стилі, що дозволяє відтворювати сцени з гри або створювати
        власні світи.
      </Col>
    </Col>
  );
};

export default MainInfo;
