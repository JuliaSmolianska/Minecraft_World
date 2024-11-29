import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { reviews } from "../data/reviews";
import css from "./Reviews.module.css";
import { PiShoppingBagOpen } from "react-icons/pi";

const Reviews = () => {
  const [currentGroup, setCurrentGroup] = useState(0); 
  const [animationClass, setAnimationClass] = useState(""); 
  const reviewsPerPage = 3;

  const reversedReviews = [...reviews].reverse();

  const handleChangeGroup = (direction) => {
    setAnimationClass(css.fadeOut);
    setTimeout(() => {
      setCurrentGroup((prev) => prev + direction);
      setAnimationClass(css.fadeIn);
    }, 300); 
  };

  const currentReviews = reversedReviews.slice(
    currentGroup * reviewsPerPage,
    (currentGroup + 1) * reviewsPerPage
  );

  return (
    <Col className="mx-auto my-3" xs={12} md={11}>
      <Col className={css.reviewsTitle}> Відгуки покупців</Col>
      <Row className={`d-flex justify-content-center ${animationClass}`}>
        {currentReviews.map((item) => (
          <Col xs={10} sm={5} lg={3} key={item.id} className={css.reviewBox}>
            <div className="d-flex align-items-center justify-content-between bg-secondary rounded-top pe-2">
              <b className="ps-2">{item.name}</b>
              <span style={{ color: "#882380", fontSize: "1.5rem" }}>
                {item.mark}
              </span>
            </div>
            <div className="d-flex ps-3 pe-3">
              <PiShoppingBagOpen size={30} className="me-2" /> "
              {item.buyProduct}"
            </div>
            <div className="text-start my-2 ps-3 pe-3">{item.coment}</div>
            <div className="mt-2 mb-0">{item.date}</div>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-3">
        <button
          className="btn btn-secondary me-2"
          onClick={() => handleChangeGroup(-1)}
          disabled={currentGroup === 0}
        >
          ←
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => handleChangeGroup(1)}
          disabled={
            (currentGroup + 1) * reviewsPerPage >= reversedReviews.length
          }
        >
          →
        </button>
      </div>
    </Col>
  );
};

export default Reviews;
