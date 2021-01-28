import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Arrow from "../../assets/arrow.svg";
import Telephone from "../../assets/telephone.svg";

import styles from "./QuoteForm.module.scss";
import classNames from "classnames";

type Inputs = {
  name: string;
  email: string;
  phone: number;
  zip: number;
  service: string;
  comment: string;
};

interface Props {
  stretch: boolean;
}
const QuoteForm: React.FC<Props> = ({ stretch }) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    console.log(data);
  };
  console.log(loading);
  return (
    <div className={classNames(styles.quoteForm, { [styles.quoteFormStretch]: stretch })}>
      <div className={styles.info}>
        <h2 className={styles.heading}>Our Location</h2>
        <p className={styles.content}>
          Plot No.ISP -10, Opposite Sanghi Organization, Near Petrol Pump, MIDC Taloja Industrial Area, Navi Mumbai, 410208, Maharashtra, India
        </p>
        <h2 className={styles.heading}>Our Email ID</h2>
        <p className={styles.content}>safelineelectricals@gmail.com</p>

        <h2 className={styles.call}>We will get back to you within 24 hours, or call us everyday, 10:00 AM - 06:00 PM</h2>
        <p className={styles.heading2}>
          <Telephone /> +91-8425846364
        </p>
      </div>
      <div className={styles.form}>
        <div className={styles.title}>
          <p>Free Consultation</p>
          <h1>Get a free Quote</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.first}>
            <input name="name" placeholder="Your Full Name" ref={register({ required: "Your name is required" })} />
            <input
              name="email"
              placeholder="Your Email ID"
              ref={register({
                required: "your email id is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email",
                },
              })}
            />
          </div>
          <div className={styles.second}>
            <input
              name="phone"
              placeholder="Your Phone Number"
              ref={register({
                required: "Your phone number is required.",
                maxLength: {
                  value: 10,
                  message: "This input exceed 10 digits.",
                },
                minLength: {
                  value: 10,
                  message: "Your number should be of 10 digits",
                },
              })}
            />

            <input name="zip" placeholder="Your Zip Code" ref={register({ required: "Your zip code is required" })} />
          </div>
          <div className={styles.third}>
            <input name="service" placeholder="Name of the service that you want" ref={register({ required: "Please enter which service you want." })} />
          </div>
          <div className={styles.fourth}>
            <textarea name="comment" placeholder="Tell us more about your requirements" ref={register({ required: false })} rows={10} />
          </div>
          <div className={styles.errors}>
            <ErrorMessage errors={errors} name="name" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="phone" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="email" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="zip" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="service" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="comment" render={({ message }) => <p className={styles.error}>{message}</p>} />
          </div>
          <button type="submit" disabled={loading}>
            Submit <Arrow />
          </button>
        </form>
      </div>
    </div>
  );
};
export default QuoteForm;
