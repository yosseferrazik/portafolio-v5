import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  const toggleAlert = (message: string, type: string) => {
    setAlertInfo({ display: true, message, type });

    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const message = e.target[3].value;

    if (name && email && subject && message) {
      const mailtoLink = `mailto:yosseferrazik@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoLink;

      toggleAlert("Form submission was successful!", "success");
    } else {
      toggleAlert("Please fill in all fields", "danger");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Contact me</h1>
        <form
          id="contact-form"
          onSubmit={onSubmit}
          className={styles.contactForm}
        >
          <div className={styles.formRow}>
            <input
              type="text"
              className={styles.formInput}
              placeholder="Name"
            />
          </div>

          <div className={styles.formRow}>
            <input
              type="email"
              className={styles.formInput}
              placeholder="Email address"
            />
          </div>

          <div className={styles.formRow}>
            <input
              type="text"
              className={styles.formInput}
              placeholder="Subject"
            />
          </div>

          <div className={styles.formRow}>
            <textarea
              rows={3}
              className={styles.formInput}
              placeholder="Message"
            />
          </div>

          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </form>

        {alertInfo.display && (
          <div
            className={`${styles.alert} ${styles[alertInfo.type]}`}
            role="alert"
          >
            {alertInfo.message}
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() =>
                setAlertInfo({ display: false, message: "", type: "" })
              }
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
