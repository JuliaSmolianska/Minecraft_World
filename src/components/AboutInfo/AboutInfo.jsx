import React, { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";
import css from "./AboutInfo.module.css";

const AboutInfo = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <Col xs={12} lg={9} className={css.box}>
      <ul
        ref={textRef}
        className={`${css.infoText} ${isVisible ? css.listVisible : ""}`}
      >
        <p className={css.infoTitle}>
          Поринь у захоплюючий світ Minecraft в реальності
        </p>
        <li>
          <span>
            <FaCheck className={css.listIcon} />{" "}
          </span>
          <p className={css.text}>
            Магнітний конструктор Minecraft призначений для дітей віком від 3
            років
          </p>
        </li>
        <li>
          <span>
            <FaCheck className={css.listIcon} />{" "}
          </span>
          <p className={css.text}>
            Cприяє розвитку дрібної моторики, просторового мислення, розвиває
            творчі навички та фантазію
          </p>
        </li>
        <li>
          <span>
            <FaCheck className={css.listIcon} />
          </span>
          <p className={css.text}>
            Кубики 2*2см легко поміщаються в дитячі руки, що робить гру
            комфортною та захоплюючою.
          </p>
        </li>
        <li>
          <span>
            <FaCheck className={css.listIcon} />
          </span>
          <p className={css.text}>
            Через свою простоту та універсальність, набір буде цікавий як для
            дітей, так і для дорослих фанатів Minecraft.
          </p>
        </li>
      </ul>
    </Col>
  );
};

export default AboutInfo;
