import React, { useEffect, useRef, useState } from "react";
import { Col, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./BuyForm.module.css";
import style from "./Product.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Ім'я має бути не менше 3 символів")
    .max(32, "Ім'я не може бути довшим за 50 символи")
    .matches(
      /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/,
      "Ім'я може містити лише літери та пробіли"
    )
    .required("Введіть ваше ім'я"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "Некоректний номер телефону")
    .required("Введіть ваш номер телефону"),

  address: Yup.string()
    .max(100, "Адреса не може бути довшою за 200 символів")
    .required("Введіть адресу доставки"),

  comment: Yup.string().max(
    500,
    "Коментар не може бути довшим за 500 символів"
  ),
});

const BuyForm = ({ product }) => {
  const handleSubmit = async (values, { resetForm }) => {
    const {title, price} = product;
    const newOrder = { ...values, title, price };
    console.log(newOrder);

    // Формуємо повідомлення для Telegram
    const message = `
    🛒 <b>Нове замовлення</b>:
    📦 <b>Продукт</b>: ${product.title}
    💵 <b>Ціна</b>: ${product.price} грн.
    👤 <b>Ім'я</b>: ${values.name}
    📞 <b>Телефон</b>: ${values.phone}
    📍 <b>Адреса</b>: ${values.address}
    💬 <b>Коментар</b>: ${values.comment || "Немає"}
  `;

    // Використовуємо API Telegram для відправки повідомлення
    const botToken = "AAEdKD9wuWm3jPzpVkam40AmOOtnm1tMnCU"; // Замініть на ваш API токен
    const chatId = "8193544106"; // Замініть на ваш chat_id, або ID чату вашого бота

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const data = await response.json();
    console.log(data)

    if (data.ok) {
      console.log("Повідомлення надіслано в Telegram");
    } else {
      console.error("Помилка при відправці повідомлення в Telegram", data);
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        address: "",
        comment: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Col className="ps-1 pe-1">
        <Form className={`pb-1 px-4 ${css.form}`} autoComplete="off">
          <label className={css.label} htmlFor="name">
            Ваше ім'я та прізвище
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </label>
          <label className={css.label} htmlFor="phone">
            Введіть ваш номер телефону
            <Field
              type="text"
              name="phone"
              id="phone"
              placeholder="0934057570"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-danger"
            />
          </label>
          <label className={css.label} htmlFor="address">
            Вкажіть адресу доставки
            <Field type="text" name="address" id="address" />
            <ErrorMessage
              name="address"
              component="div"
              className="text-danger"
            />
          </label>
          <Col>
            <p>
              <b>Ваше замовлення:</b>
              <br />"{product.title}" на суму {product.price}грн.
            </p>
          </Col>
          <label className={css.label} htmlFor="comment">
            Коментарій до замовлення
            <Field as="textarea" type="text" name="comment" id="comment" />
            <ErrorMessage
              name="comment"
              component="div"
              className="text-danger"
            />
          </label>
          <Col className="d-flex justify-content-evenly mt-4">
            <Button className={style.buyBtn} type="submit">
              Сформувати замовлення
            </Button>
          </Col>
        </Form>
      </Col>
    </Formik>
  );
};

export default BuyForm;