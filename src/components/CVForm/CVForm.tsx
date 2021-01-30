import { ErrorMessage } from "@hookform/error-message";
import classNames from "classnames";
import React, { useState } from "react";
import Arrow from "../../assets/arrow.svg";

import { useForm } from "react-hook-form";
import styles from "./CVForm.module.scss";
import axios from "axios";
import Modal from "../Modal/Modal";

type Inputs = {
  name: string;
  email: string;
  phone: number;
  zip: number;
  cv: File;
  message: string;
};
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

interface Props {}
const CVForm: React.FC<Props> = ({}) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values: any, e: any) => {
    setLoading(true);
    const resume = await getBase64(values.resume[0]);
    const extension = values.resume[0].type === "image/jpeg" ? "jpg" : values.resume[0].type.split("/")[1];
    const { data } = await axios.post(process.env.GATSBY_RESUME_API!, {
      ...values,
      resume: {
        data: resume,
        extension,
      },
    });
    setShowModal(true);
    setLoading(false);
    setModalText(data.message);
    e.target.reset(); // reset after form submit  };
  };
  return (
    <div className={classNames(styles.cvForm)}>
      <Modal showModal={showModal} setShowModal={setShowModal} modalText={modalText} />
      <div className={styles.form}>
        <div className={styles.title}>
          <p>Career with us</p>
          <h1>SEND US YOUR RESUME</h1>
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
            <>
              <input type="file" name="resume" ref={register({ required: "Your resume is required" })} />
            </>
          </div>
          <div className={styles.fourth}>
            <textarea name="message" placeholder="Tell us something about yourself" ref={register({ required: false })} rows={10} />
          </div>
          <div className={styles.errors}>
            <ErrorMessage errors={errors} name="name" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="phone" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="email" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="zip" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="resume" render={({ message }) => <p className={styles.error}>{message}</p>} />
            <ErrorMessage errors={errors} name="message" render={({ message }) => <p className={styles.error}>{message}</p>} />
          </div>
          <button type="submit" disabled={loading}>
            Submit <Arrow />
          </button>
        </form>
      </div>
    </div>
  );
};
export default CVForm;
