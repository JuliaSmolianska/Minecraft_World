import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import css from "./Footer.module.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Modal from "../Modal/Modal";

const Footer = () => {
  const dateYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = "minecraftworld_2024@ukr.net";
  const phone = "+38(068)-883-84-93";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => {
      setCopiedPhone(false);
    }, 2000);
  };

  return (
    <Col xs={12} className={css.bgFooter}>
      <Row>
        <Col xs={12} md={6}>
          <div className="d-flex align-items-center mb-2 mb-md-3 justify-content-center justify-content-md-start">
            <TbTruckDelivery className={css.icons} />
            <p className={css.text}>Доставка по всій Україні</p>
          </div>
          <div className="d-flex align-items-center mb-2 mb-md-3  justify-content-center justify-content-md-start">
            <MdPhoneInTalk className={css.icons} />
            <p className={css.text}>Консультація та підтримка</p>
          </div>
          <div className="d-flex align-items-center mb-2 mb-md-3  justify-content-center justify-content-md-start">
            <MdOutlineShoppingCart className={css.icons} />
            <p className={css.text}>Захист прав споживача</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="fs-3 text-center text-md-start">
            <b>Контакти:</b>
          </div>
          <div className="d-flex align-items-center justify-content-center justify-content-md-start">
            <FaPhoneAlt size={25} />
            <p
              className={`${css.copied} "pt-2 fs-5 text-center text-md-start"`}
              style={{ cursor: "pointer" }}
              onClick={handleCopyPhone}
            >
              {phone}
            </p>
          </div>
          <div className="d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
            <div>
              <MdOutlineMail size={30} />
            </div>
            <p
              className={`${css.text} ${css.copied}`}
              onClick={handleCopyEmail}
            >
              {email}
            </p>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-center justify-content-md-start">
              <div className={css.iconContactsBox}>
                <FaViber size={40} className={css.iconContacts} />
              </div>
              <div className={css.iconContactsBox}>
                <FaTelegramPlane size={40} className={css.iconContacts} />
              </div>
              <div className={css.iconContactsBox}>
                <FaInstagram size={40} className={css.iconContacts} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="mt-5" style={{ fontSize: "14px" }}>
        Інтернет-магазин "Minecraft_World"&copy; {dateYear}
      </div>
      {copiedEmail && (
        <Modal
          show={copiedEmail}
          onClose={() => setCopiedEmail(false)}
          style={{ height: "auto" }}
        >
          <b>Електронну адресу скопійовано!</b>
        </Modal>
      )}
      {copiedPhone && (
        <Modal
          show={copiedPhone}
          onClose={() => setCopiedPhone(false)}
          style={{ height: "auto" }}
        >
          <b>Номер телефону скопійовано!</b>
        </Modal>
      )}
    </Col>
  );
};

export default Footer;
