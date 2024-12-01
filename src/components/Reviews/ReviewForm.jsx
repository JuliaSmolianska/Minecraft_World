import React from "react";
import { Col, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../Products/BuyForm.module.css";
import style from "../Products/Product.module.css";

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

  review: Yup.string()
    .max(500, "Відгук не може бути довшим за 500 символів")
    .required("Залиште Ваш відгук"),
});

const ReviewForm = ({ reviewModal, setReviewResult }) => {
  const handleSubmit = async (values, { resetForm }) => {
    const message = `
      🛒 Новий відгук:!
      👤 Ім'я: ${values.name}
      📞 Телефон: ${values.phone}
      💬 Відгук: ${values.review || "Немає"}
    `;

    try {
      const response = await fetch(
        "https://sparkling-treacle-fe54b9.netlify.app/.netlify/functions/sendMessage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: "5141047645",
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      await response.json();

      if (response.ok) {
        setReviewResult(
          "Дякуємо! Ваш відгук надіслано, незабаром він опублікується на сайті."
        );
      } else {
        setReviewResult("Виникла помилка. Спробуйте пізніше.");
      }
    } catch (error) {
      setReviewResult("Помилка з'єднання. Спробуйте пізніше.");
    } finally {
      setTimeout(() => {
        reviewModal(false);
      }, 5000);

      resetForm();

      setTimeout(() => {
        setReviewResult("");
      }, 6000);
    }
  };

  return (
    <Formik
      initialValues={{
        phone: "",
        name: "",
        review: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Col className="ps-1 pe-1">
        <Form className={`pb-1 px-4 ${css.form}`} autoComplete="off">
          <div className="text-center fs-5">
            <b>
              Відгук можна залишити лише після покупки в нашому
              інтернет-магазині!
            </b>
          </div>
          <br />
          <label className={css.label} htmlFor="phone">
            Введіть номер телефону, за яким оформлювалось замовлення
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
          <label className={css.label} htmlFor="name">
            Ваше ім'я
            <Field type="text" name="name" id="name" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </label>
          <label className={css.label} htmlFor="review">
            Напишіть свій відгук
            <Field as="textarea" type="text" name="review" id="review" />
            <ErrorMessage
              name="review"
              component="div"
              className="text-danger"
            />
          </label>
          <Col className="d-flex justify-content-evenly mt-4">
            <Button className={style.buyBtn} type="submit">
              Надіслати відгук
            </Button>
          </Col>
        </Form>
      </Col>
    </Formik>
  );
};

export default ReviewForm;
