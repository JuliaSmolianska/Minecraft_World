import React, { useState } from "react";
import { Col, Row, Button, Card, Carousel, Image } from "react-bootstrap";
import { products } from "../../data/products";
import css from "./Product.module.css";
import { IoIosPricetags } from "react-icons/io";
import "./Carousel.css";
import BuyForm from "./BuyForm";
import Modal from "../Modal/Modal";

const Products = () => {
  //interval={null}

  const [orderModal, setOrderModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [carouselModal, setCarouselModal] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [orderResult, setOrderResult] = useState("");

  const openCarouselModal = (images) => {
    setActiveImages(images);
    setCarouselModal(true);
  };

  const makeOrder = (item) => {
    setOrderModal(true);
    setProduct(item);
  };

  return (
    <Col>
      <Row className="d-flex justify-content-center">
        {products.map((item) => (
          <Col
            key={item.id}
            xs={10}
            sm={6}
            md={4}
            lg={3}
            style={{ width: "100%", maxWidth: "340px", margin: "5px" }}
          >
            <Card className={css.card}>
              <Card.Title className={css.title}>"{item.title}"</Card.Title>

              <Carousel controls={false}>
                {item.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <Card.Img
                      variant="top"
                      src={image}
                      style={{
                        width: "75%",
                        height: "250px",
                        objectFit: "cover",
                        margin: "0 auto 33px",
                        cursor: "pointer",
                      }}
                      onClick={() => openCarouselModal(item.images)}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <Card.Body className="pt-0">
                <Col className={css.price}>
                  <IoIosPricetags
                    className={
                      item.salePrice ? css.iconPriceSale : css.iconPrice
                    }
                  />
                  {item.salePrice ? (
                    <div className="d-block">
                      <p className={css.priceSale}>{item.salePrice} грн.</p>
                    </div>
                  ) : (
                    <span>{item.price} грн.</span>
                  )}
                </Col>
                {item.salePrice && (
                  <p className={css.priceBeforeSale}>{item.price} грн.</p>
                )}
                {item.salePrice && <div className={css.sale}>sale</div>}
                <Card.Text>
                  В наборі {item.quantityBlock} + {item.quantityHero}
                </Card.Text>
                <Col className="d-flex justify-content-evenly">
                  <Button
                    className={css.buyBtn}
                    onClick={() => makeOrder(item)}
                  >
                    Замовити
                  </Button>
                </Col>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {orderModal && (
        <Modal
          show={orderModal}
          onClose={() => setOrderModal(false)}
          style={{ height: "auto" }}
        >
          {orderResult.length !== 0 ? (
            <b className="py-5 px-2 fs-4">{orderResult}</b>
          ) : (
            <BuyForm
              product={product}
              orderModal={setOrderModal}
              setOrderResult={setOrderResult}
            />
          )}
        </Modal>
      )}

      {carouselModal && (
        <Modal
          show={carouselModal}
          onClose={() => setCarouselModal(false)}
          style={{ height: "90%" }}
        >
          <Carousel controls={false}>
            {activeImages.map((image, index) => (
              <Carousel.Item key={index}>
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    margin: "10px auto 36px",
                    height: "auto",
                    transform: "scale(1.1)",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal>
      )}
    </Col>
  );
};

export default Products;
