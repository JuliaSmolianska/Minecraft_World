import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { GiCube } from "react-icons/gi";
import { IoMagnet } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import { LuPaintBucket } from "react-icons/lu";
import css from "./Info.module.css";

const Info = () => {
  const boxRef = useRef(null);
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

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <Col xs={11} sm={9} md={8} lg={11} xl={10} className={css.box} ref={boxRef}>
      <p className={css.textTitle}>Якісно та екологічно</p>
      <p className={css.text1}>
        Наші кубики зроблені з дерева, з вбудованими магнітами всередині та
        покриті яскравою наклейкою.
      </p>
      <Row className={isVisible ? css.boxVisible : ""}>
        <Col xs={6} lg={3} className={`${css.col} d-block mt-xs-2 mt-lg-4`}>
          <div className={css.iconBox}>
            <GiCube className={css.icon} />
          </div>
          <p className={`${css.text2} mb-0`}>Великий розмір</p>
          <p className={css.text2}>2 см</p>
        </Col>
        <Col xs={6} lg={3} className={`${css.col} d-block mt-xs-2 mt-lg-4`}>
          <div className={css.iconBox}>
            <IoMagnet className={css.icon} />
          </div>
          <p className={css.text2}>Потужні магніти</p>
        </Col>
        <Col xs={6} lg={3} className={`${css.col} d-block mt-xs-2 mt-lg-4`}>
          <div className={css.iconBox}>
            <LuPaintBucket className={css.icon} />
          </div>
          <p className={`${css.text2} mb-0`}>Яскраві принти</p>
          <p className={css.text2}>УФ друк</p>
        </Col>
        <Col xs={6} lg={3} className={`${css.col} d-block mt-xs-2 mt-lg-4`}>
          <div className={css.iconBox}>
            <FaBoxArchive className={css.icon} />
          </div>
          <p className={`${css.text2} mb-0`}>Презентабельна</p>
          <p className={css.text2}>коробка</p>
        </Col>
      </Row>
      <Col className={`${css.text1} mt-xs-2 mt-lg-4 mb-xs-2 mb-lg-4`}>
        Окрім готових наборів, ми надаємо можливість скласти вміст набору -
        кубиками на ваш вибір та вподобання для відтворення власних локацій!
      </Col>
    </Col>
  );
};

export default Info;
