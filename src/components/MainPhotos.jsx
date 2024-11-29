import React from "react";
import { Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./MainPhotos.module.css";

const MainPhotos = () => {
  return (
    <Col className="mt-3 m-auto" xs={12} lg={9}>
      <Carousel fade>
        <Carousel.Item>
          <Image
            src="/images/img_21.png"
            text="First slide"
            className={css.image}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="/images/img1_2.png"
            text="Second slide"
            className={css.image}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/screenshots/bedrock_header.jpg"
            text="Third slide"
            className={css.image}
          />
        </Carousel.Item>
      </Carousel>
    </Col>
  );
};

export default MainPhotos;
